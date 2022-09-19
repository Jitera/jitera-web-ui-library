import React, { CSSProperties, useEffect, useMemo, useState } from 'react'

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import {
  CellContext,
  ColumnDef,
  ColumnDefTemplate,
  DeepKeys,
  PaginationState,
  Row,
  RowData,
  SortingState
} from '@tanstack/table-core'

import { CSSObject } from 'styled-components'

import { Pagination, PaginationProps } from 'antd'

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DndContextProps,
  MouseSensor,
  TouchSensor,
  DragEndEvent
} from '@dnd-kit/core'

import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'

import {
  restrictToFirstScrollableAncestor,
  restrictToParentElement,
  restrictToVerticalAxis
} from '@dnd-kit/modifiers'

import { CSS } from '@dnd-kit/utilities'

import { Icon, IconProps } from '@components/atoms/Icon/Icon.component'

import {
  StyledTable,
  StyledTableWrapper,
  StyledTr,
  StyledTh,
  StyledTd,
  StyledTableResizer
} from './Table.styles'

export { createColumnHelper } from '@tanstack/react-table'

export { arrayMove } from '@dnd-kit/sortable'

export interface TableColumnDefinition<DataModel extends RowData> {
  name: string
  path?: DeepKeys<DataModel>
  renderColumn?: ColumnDefTemplate<CellContext<DataModel, any>> | undefined
  sortable?: boolean
  filterable?: boolean
}

export interface TableProps<DataModel extends RowData> {
  className?: string
  data: DataModel[]
  columns: TableColumnDefinition<DataModel>[]
  actions?: TableColumnDefinition<DataModel>[]
  style?: CSSObject

  styleWrapper?: CSSProperties
  styleTable?: CSSProperties
  styleThead?: CSSProperties

  isResizeable?: boolean
  isHeaderVisible?: boolean
  isFooterVisible?: boolean

  isRowSortable?: boolean
  onRowSortChange?: (currentIndex: number, newIndex: number) => void

  ascendingIconProps?: IconProps
  descendingIconProps?: IconProps
  onSortingChange?: (sorting: SortingState) => void

  isPaginationEnabled?: boolean
  totalPage?: number
  paginationProps?: Omit<PaginationProps, 'current' | 'total' | 'pageSize' | 'onChange'>
  onPaginationChange?: (pagination: PaginationState) => void
}

export interface TableRowProps<DataModel extends RowData>
  extends Pick<TableProps<DataModel>, 'isRowSortable'> {
  row: Row<DataModel>
}

const TableRow = <DataModel,>({ row, isRowSortable }: TableRowProps<DataModel>) => {
  const { attributes, listeners, transform, isDragging, setNodeRef } = useSortable({
    id: row.id
  })
  const style: CSSProperties = {
    transform: CSS.Transform.toString({
      x: transform?.x || 0,
      y: transform?.y || 0,
      scaleX: 1,
      scaleY: 1
    })
  }
  return (
    <StyledTr
      ref={setNodeRef}
      key={row.id}
      className={`j-table__tbody-tr j-table__tbody-tr--${row.id} ${
        isDragging ? `j-table__tbody-tr--dragging` : undefined
      }`}
      style={style}
    >
      {isRowSortable ? (
        <StyledTd {...listeners} {...attributes}>
          <Icon className="j-table__tbody-td-drag" iconName="MdDragIndicator" />
        </StyledTd>
      ) : undefined}
      {row.getVisibleCells().map((cell) => (
        <StyledTd
          key={cell.id}
          className={`j-table__tbody-td j-table__tbody-td--${cell.id}`}
          style={{ width: cell.column.getSize() }}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </StyledTd>
      ))}
    </StyledTr>
  )
}

const TableInner = <DataModel,>(
  {
    className,
    data,
    columns,
    style,

    isResizeable,
    isHeaderVisible = true,
    isFooterVisible,

    isRowSortable,
    onRowSortChange,

    ascendingIconProps,
    descendingIconProps,
    onSortingChange,

    isPaginationEnabled,
    totalPage,
    paginationProps,
    onPaginationChange
  }: TableProps<DataModel>,
  ref: React.ForwardedRef<HTMLTableElement>
) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
  const formattedColumns = useMemo<ColumnDef<DataModel, any>[]>(
    () =>
      columns.map((column) => ({
        accessorKey: !column.renderColumn ? column.path : undefined,
        header: column.name,
        footer: column.name,
        cell: column.renderColumn ? column.renderColumn : (info: any) => info.getValue(),
        enableSorting: column.sortable
      })),
    [columns]
  )
  const table = useReactTable({
    data,
    columns: formattedColumns,
    columnResizeMode: isResizeable ? 'onChange' : undefined,
    pageCount: totalPage,
    state: {
      sorting,
      pagination: isPaginationEnabled ? pagination : undefined
    },
    manualPagination: isPaginationEnabled,
    manualSorting: true,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: isPaginationEnabled ? setPagination : undefined,
    onSortingChange: setSorting
  })
  const dndSensors = useSensors(
    useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )
  useEffect(() => {
    if (onSortingChange) {
      onSortingChange(sorting)
    }
  }, [onSortingChange, sorting])
  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange(pagination)
    }
  }, [onPaginationChange, pagination])
  const handleAntdPaginationChange: PaginationProps['onChange'] = (page, _pageSize) => {
    table.setPageIndex(page - 1)
    table.setPageSize(_pageSize)
  }
  const handleRowSortChange: DndContextProps['onDragEnd'] = ({ active, over }) => {
    const currentIndex = (active as DragEndEvent['active']).data.current?.sortable.index
    const newIndex = (over as DragEndEvent['over'])?.data.current?.sortable.index
    if (onRowSortChange) {
      onRowSortChange(currentIndex, newIndex)
    }
  }
  return (
    <StyledTableWrapper style={style} className={className}>
      <StyledTable
        ref={ref}
        className="j-table"
        style={{ width: isResizeable ? table.getCenterTotalSize() : undefined }}
      >
        {isHeaderVisible ? (
          <thead className="j-table__thead">
            {/* eslint-disable-next-line sonarjs/cognitive-complexity */}
            {table.getHeaderGroups().map((headerGroup) => (
              <StyledTr
                key={headerGroup.id}
                className={`j-table__thead-tr j-table__thead-tr--${headerGroup.id}`}
              >
                {isRowSortable ? <StyledTh /> : undefined}
                {headerGroup.headers.map((header) => (
                  <StyledTh
                    key={header.id}
                    className={`j-table__thead-th j-table__thead-th--${header.id}`}
                    colSpan={header.colSpan}
                    canSort={header.column.getCanSort()}
                    style={{ width: isResizeable ? header.getSize() : undefined }}
                    onClick={header.column.getToggleSortingHandler()}
                    onMouseDown={isResizeable ? header.getResizeHandler() : undefined}
                    onTouchStart={isResizeable ? header.getResizeHandler() : undefined}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: ascendingIconProps ? <Icon {...ascendingIconProps} /> : ' 🔼',
                      desc: descendingIconProps ? <Icon {...descendingIconProps} /> : ' 🔽'
                    }[header.column.getIsSorted() as string] ?? null}
                    {isResizeable ? (
                      <StyledTableResizer
                        className="j-table__resizer"
                        isResizing={header.column.getIsResizing()}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                      />
                    ) : undefined}
                  </StyledTh>
                ))}
              </StyledTr>
            ))}
          </thead>
        ) : undefined}
        <tbody className="j-table__tbody">
          <DndContext
            sensors={dndSensors}
            collisionDetection={closestCenter}
            modifiers={[
              restrictToFirstScrollableAncestor,
              restrictToVerticalAxis,
              restrictToParentElement
            ]}
            onDragEnd={handleRowSortChange}
          >
            <SortableContext
              items={table.getRowModel().rows}
              strategy={verticalListSortingStrategy}
            >
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} row={row} isRowSortable={isRowSortable} />
              ))}
            </SortableContext>
          </DndContext>
        </tbody>
        {isFooterVisible ? (
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <StyledTh key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.footer, header.getContext())}
                  </StyledTh>
                ))}
              </tr>
            ))}
          </tfoot>
        ) : undefined}
      </StyledTable>
      {isPaginationEnabled ? (
        <Pagination
          {...paginationProps}
          current={pagination!.pageIndex + 1}
          total={totalPage}
          onChange={handleAntdPaginationChange}
        />
      ) : undefined}
    </StyledTableWrapper>
  )
}

export const Table = React.forwardRef(TableInner) as <DataModel>(
  props: TableProps<DataModel> & { ref?: React.ForwardedRef<HTMLTableElement> }
) => ReturnType<typeof TableInner>
