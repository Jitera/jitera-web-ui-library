import React, { CSSProperties, useEffect, useMemo, useState } from 'react'

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import {
  CellContext,
  ColumnDef,
  ColumnDefTemplate,
  DeepKeys,
  Header,
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
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'

import {
  restrictToFirstScrollableAncestor,
  restrictToHorizontalAxis,
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

declare module '@tanstack/table-core' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    action: boolean
  }
}

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
  tableStyle?: CSSObject
  headerRowStyle?: CSSObject
  bodyRowStyle?: CSSObject
  footerRowStyle?: CSSObject

  styleWrapper?: CSSProperties
  styleTable?: CSSProperties
  styleThead?: CSSProperties

  isColumnResizeable?: boolean
  isHeaderVisible?: boolean
  isFooterVisible?: boolean

  isColumnSortable?: boolean
  onColumnSortingChange?: (currentIndex: number, newIndex: number) => void

  isRowSortable?: boolean
  onRowSortingChange?: (currentIndex: number, newIndex: number) => void

  isDataSortable?: boolean
  ascendingIconProps?: IconProps
  descendingIconProps?: IconProps
  onDataSortingChange?: (sorting: SortingState) => void

  isPaginationEnabled?: boolean
  totalPage?: number
  paginationProps?: Omit<PaginationProps, 'current' | 'total' | 'pageSize' | 'onChange' | 'style'>
  paginationStyle?: PaginationProps['style']
  onPaginationChange?: (pagination: PaginationState) => void
}

export interface TableRowProps<DataModel extends RowData>
  extends Pick<TableProps<DataModel>, 'isRowSortable' | 'bodyRowStyle'> {
  row: Row<DataModel>
}

export interface TableHeaderProps<DataModel extends RowData>
  extends Pick<
    TableProps<DataModel>,
    | 'isColumnResizeable'
    | 'isColumnSortable'
    | 'isDataSortable'
    | 'ascendingIconProps'
    | 'descendingIconProps'
  > {
  header: Header<DataModel, unknown>
}

const TableHeader = <DataModel,>({
  header,
  isColumnResizeable,
  isColumnSortable,
  isDataSortable,
  ascendingIconProps,
  descendingIconProps
}: // eslint-disable-next-line sonarjs/cognitive-complexity
TableHeaderProps<DataModel>) => {
  const { attributes, listeners, transform, isDragging, setNodeRef } = useSortable({
    id: header.id
  })
  const style: CSSProperties = {
    transform: CSS.Transform.toString({
      x: transform?.x || 0,
      y: transform?.y || 0,
      scaleX: 1,
      scaleY: 1
    })
  }
  const isColumnSortableInternal = useMemo(
    () => isColumnSortable && !header.column.columnDef.meta?.action,
    [header.column.columnDef.meta?.action, isColumnSortable]
  )
  const activeListeners = isColumnSortableInternal ? listeners : undefined
  const activeAttributes = isColumnSortableInternal ? attributes : undefined
  return (
    <StyledTh
      ref={setNodeRef}
      key={header.id}
      className={`j-table__thead-th j-table__thead-th--${header.id} ${
        isDragging ? `j-table__thead-th--dragging` : ''
      }`}
      colSpan={header.colSpan}
      canSort={isDataSortable ? header.column.getCanSort() : undefined}
      style={{ ...style, width: isColumnResizeable ? header.getSize() : undefined }}
      onClick={isDataSortable ? header.column.getToggleSortingHandler() : undefined}
      onMouseDown={isColumnResizeable ? header.getResizeHandler() : undefined}
      onTouchStart={isColumnResizeable ? header.getResizeHandler() : undefined}
      {...activeListeners}
      {...activeAttributes}
    >
      {flexRender(header.column.columnDef.header, header.getContext())}
      {isColumnSortableInternal ? (
        <Icon className="j-table__thead-th-drag" iconName="MdDragIndicator" />
      ) : undefined}
      {isDataSortable
        ? {
            asc: ascendingIconProps ? <Icon {...ascendingIconProps} /> : ' 🔼',
            desc: descendingIconProps ? <Icon {...descendingIconProps} /> : ' 🔽'
          }[header.column.getIsSorted() as string] ?? null
        : undefined}
      {isColumnResizeable ? (
        <StyledTableResizer
          className="j-table__resizer"
          isResizing={header.column.getIsResizing()}
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
        />
      ) : undefined}
    </StyledTh>
  )
}

const TableRow = <DataModel,>({ row, isRowSortable, bodyRowStyle }: TableRowProps<DataModel>) => {
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
        isDragging ? `j-table__tbody-tr--dragging` : ''
      }`}
      style={{ ...bodyRowStyle, ...style }}
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
    actions = [],

    style,
    tableStyle,
    headerRowStyle,
    bodyRowStyle,
    footerRowStyle,

    isColumnResizeable,
    isHeaderVisible = true,
    isFooterVisible,

    isColumnSortable,
    onColumnSortingChange,

    isRowSortable,
    onRowSortingChange,

    isDataSortable,
    ascendingIconProps,
    descendingIconProps,
    onDataSortingChange,

    isPaginationEnabled,
    totalPage,
    paginationProps,
    paginationStyle,
    onPaginationChange
  }: TableProps<DataModel>,
  ref: React.ForwardedRef<HTMLTableElement>
  // eslint-disable-next-line sonarjs/cognitive-complexity
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
  const formattedActions = useMemo<ColumnDef<DataModel, any>[]>(
    () =>
      actions.map((action) => ({
        meta: {
          action: true
        },
        header: action.name,
        footer: action.name,
        cell: action.renderColumn,
        enableSorting: false
      })),
    [actions]
  )
  const table = useReactTable({
    data,
    columns: [...formattedColumns, ...formattedActions],
    columnResizeMode: isColumnResizeable ? 'onChange' : undefined,
    pageCount: totalPage,
    state: {
      sorting: isDataSortable ? sorting : undefined,
      pagination: isPaginationEnabled ? pagination : undefined
    },
    manualPagination: isPaginationEnabled,
    manualSorting: true,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: isPaginationEnabled ? setPagination : undefined,
    onSortingChange: isDataSortable ? setSorting : undefined
  })
  const dndSensors = useSensors(
    useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )
  useEffect(() => {
    if (onDataSortingChange) {
      onDataSortingChange(sorting)
    }
  }, [onDataSortingChange, sorting])
  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange(pagination)
    }
  }, [onPaginationChange, pagination])
  const handleAntdPaginationChange: PaginationProps['onChange'] = (page, _pageSize) => {
    table.setPageIndex(page - 1)
    table.setPageSize(_pageSize)
  }
  const getCurrentNewIndex = ({ active, over }: DragEndEvent) => {
    const currentIndex = (active as DragEndEvent['active']).data.current?.sortable.index
    const newIndex = (over as DragEndEvent['over'])?.data.current?.sortable.index
    return {
      currentIndex,
      newIndex
    }
  }
  const handleRowSortingChange: DndContextProps['onDragEnd'] = (event) => {
    const { currentIndex, newIndex } = getCurrentNewIndex(event)
    if (onRowSortingChange) {
      onRowSortingChange(currentIndex, newIndex)
    }
  }
  const handleColumnSortingChange: DndContextProps['onDragEnd'] = (event) => {
    const { currentIndex, newIndex } = getCurrentNewIndex(event)
    if (onColumnSortingChange) {
      onColumnSortingChange(currentIndex, newIndex)
    }
  }
  return (
    <StyledTableWrapper style={style} className={className}>
      <StyledTable
        ref={ref}
        className="j-table"
        style={{
          ...tableStyle,
          width: isColumnResizeable ? table.getCenterTotalSize() : undefined
        }}
      >
        {isHeaderVisible ? (
          <thead className="j-table__thead">
            {/* eslint-disable-next-line sonarjs/cognitive-complexity */}
            {table.getHeaderGroups().map((headerGroup) => (
              <StyledTr
                key={headerGroup.id}
                className={`j-table__thead-tr j-table__thead-tr--${headerGroup.id}`}
                style={headerRowStyle}
              >
                {isRowSortable ? <StyledTh /> : undefined}
                <DndContext
                  sensors={dndSensors}
                  collisionDetection={closestCenter}
                  modifiers={[
                    restrictToFirstScrollableAncestor,
                    restrictToHorizontalAxis,
                    restrictToParentElement
                  ]}
                  onDragEnd={handleColumnSortingChange}
                >
                  <SortableContext
                    items={headerGroup.headers}
                    strategy={horizontalListSortingStrategy}
                  >
                    {headerGroup.headers.map((header) => (
                      <TableHeader
                        key={header.id}
                        header={header}
                        isColumnResizeable={isColumnResizeable}
                        isColumnSortable={isColumnSortable}
                        isDataSortable={isDataSortable}
                        ascendingIconProps={ascendingIconProps}
                        descendingIconProps={descendingIconProps}
                      />
                    ))}
                  </SortableContext>
                </DndContext>
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
            onDragEnd={handleRowSortingChange}
          >
            <SortableContext
              items={table.getRowModel().rows}
              strategy={verticalListSortingStrategy}
            >
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  row={row}
                  isRowSortable={isRowSortable}
                  bodyRowStyle={bodyRowStyle}
                />
              ))}
            </SortableContext>
          </DndContext>
        </tbody>
        {isFooterVisible ? (
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <StyledTr key={footerGroup.id} style={footerRowStyle}>
                {isRowSortable ? <StyledTh /> : undefined}
                {footerGroup.headers.map((header) => (
                  <StyledTh key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.footer, header.getContext())}
                  </StyledTh>
                ))}
              </StyledTr>
            ))}
          </tfoot>
        ) : undefined}
      </StyledTable>
      {isPaginationEnabled ? (
        <Pagination
          {...paginationProps}
          style={paginationStyle}
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
