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
  StyledTableResizer,
  StyledPaginationWrapper,
  PaginationPositionType,
  StyledTHead,
  StyledTBody,
  StyledTFoot
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

  wrapperStyle?: CSSObject
  tableStyle?: CSSObject

  headerStyle?: CSSObject
  headerRowStyle?: CSSObject
  headerColumnStyle?: CSSObject

  bodyStyle?: CSSObject
  bodyRowStyle?: CSSObject
  bodyColumnStyle?: CSSObject

  sortColumnStyle?: CSSObject

  footerStyle?: CSSObject
  footerRowStyle?: CSSObject
  footerColumnStyle?: CSSObject

  paginationWrapperStyle?: CSSObject

  isColumnResizeable?: boolean
  isHeaderVisible?: boolean
  isFooterVisible?: boolean

  isColumnSortable?: boolean
  onColumnSortingChange?: (currentIndex: number, newIndex: number, event: DragEndEvent) => void

  isRowSortable?: boolean
  onRowSortingChange?: (currentIndex: number, newIndex: number, event: DragEndEvent) => void

  isDataSortable?: boolean
  ascendingIconProps?: IconProps
  descendingIconProps?: IconProps
  onDataSortingChange?: (sortBy: string, sort: string) => void

  isPaginationEnabled?: boolean
  paginationPosition?: PaginationPositionType
  pageSize?: number
  totalPage?: number
  paginationProps?: Omit<
    PaginationProps,
    'current' | 'total' | 'pageSize' | 'defaultPageSize' | 'onChange' | 'style'
  >
  paginationStyle?: PaginationProps['style']
  onPaginationChange?: (pageIndex: string, pageSize: string) => void
}

export interface TableRowProps<DataModel extends RowData>
  extends Pick<
    TableProps<DataModel>,
    'isRowSortable' | 'isColumnResizeable' | 'bodyRowStyle' | 'bodyColumnStyle' | 'sortColumnStyle'
  > {
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
    | 'headerColumnStyle'
  > {
  header: Header<DataModel, unknown>
}

export const DEFAULT_TABLE_BORDER_STYLES = {
  borderWidth: '1px',
  borderColor: '#000',
  borderStyle: 'solid'
}

const TableHeader = <DataModel,>({
  header,
  isColumnResizeable,
  isColumnSortable,
  isDataSortable,
  ascendingIconProps,
  descendingIconProps,
  headerColumnStyle
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
      customStyle={{
        ...headerColumnStyle,
        ...style,
        width: isColumnResizeable ? header.getSize() : headerColumnStyle?.width
      }}
      onClick={isDataSortable ? header.column.getToggleSortingHandler() : undefined}
      onMouseDown={isColumnResizeable ? header.getResizeHandler() : undefined}
      onTouchStart={isColumnResizeable ? header.getResizeHandler() : undefined}
      {...activeListeners}
      {...activeAttributes}
    >
      {flexRender(header.column.columnDef.header, header.getContext())}
      {isColumnSortableInternal ? (
        <Icon className="j-table__thead-th-drag-indicator" iconName="MdDragIndicator" />
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

const TableRow = <DataModel,>({
  row,
  isRowSortable,
  isColumnResizeable,
  bodyRowStyle,
  bodyColumnStyle,
  sortColumnStyle
}: TableRowProps<DataModel>) => {
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
      customStyle={{ ...bodyRowStyle, ...style }}
    >
      {isRowSortable ? (
        <StyledTd
          isSortColumn
          customStyle={{ ...bodyColumnStyle, ...sortColumnStyle }}
          className="j-table__tbody-td j-table__tbody-td--drag"
          {...listeners}
          {...attributes}
        >
          <Icon iconName="MdDragIndicator" />
        </StyledTd>
      ) : undefined}
      {row.getVisibleCells().map((cell) => (
        <StyledTd
          key={cell.id}
          className={`j-table__tbody-td j-table__tbody-td--${cell.id}`}
          customStyle={{
            ...bodyColumnStyle,
            width: isColumnResizeable ? cell.column.getSize() : bodyColumnStyle?.width
          }}
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
    data = [],
    columns = [],
    actions = [],

    wrapperStyle,
    tableStyle,

    headerStyle,
    headerRowStyle,
    headerColumnStyle,

    bodyStyle,
    bodyRowStyle,
    bodyColumnStyle,

    sortColumnStyle,

    footerStyle,
    footerRowStyle,
    footerColumnStyle,

    paginationWrapperStyle,

    isColumnResizeable,
    isHeaderVisible,
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
    paginationPosition,
    pageSize,
    totalPage,
    paginationProps,
    paginationStyle,
    onPaginationChange
  }: TableProps<DataModel>,
  ref: React.ForwardedRef<HTMLDivElement>
  // eslint-disable-next-line sonarjs/cognitive-complexity
) => {
  const internalData = useMemo(() => data, [data])
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize || 20
  })
  const formattedColumns = useMemo<ColumnDef<DataModel, any>[]>(
    () =>
      columns.map((column) => ({
        accessorKey: column.path,
        header: column.name,
        footer: column.name,
        cell: column.renderColumn ? column.renderColumn : (info: any) => info.getValue() || '',
        enableSorting: column.sortable
      })),
    [columns]
  )
  const formattedActions = useMemo<ColumnDef<DataModel, any>[]>(
    () =>
      actions.map((action, index) => ({
        id: String(index),
        meta: {
          action: true
        },
        header: action.name,
        footer: action.name,
        cell: action.renderColumn ? action.renderColumn : (info: any) => info.getValue() || '',
        enableSorting: false
      })),
    [actions]
  )
  const internalColumns = useMemo(
    () => [...formattedColumns, ...formattedActions],
    [formattedColumns, formattedActions]
  )
  const table = useReactTable({
    data: internalData,
    columns: internalColumns,
    columnResizeMode: isColumnResizeable ? 'onChange' : undefined,
    pageCount: isPaginationEnabled ? totalPage : undefined,
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
    if (isPaginationEnabled && !(Number.isInteger(pageSize) && Number.isInteger(totalPage))) {
      throw new Error('`pageSize` and `totalPage` should be required if pagination enabled')
    }
  }, [isPaginationEnabled, pageSize, totalPage])
  useEffect(() => {
    const sortingState = sorting?.[0]
    if (onDataSortingChange && sortingState) {
      onDataSortingChange(sortingState.id, sortingState.desc ? 'desc' : 'asc')
    }
  }, [onDataSortingChange, sorting])
  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange(String(pagination.pageIndex + 1), String(pagination.pageSize))
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
      onRowSortingChange(currentIndex, newIndex, event)
    }
  }
  const handleColumnSortingChange: DndContextProps['onDragEnd'] = (event) => {
    const { currentIndex, newIndex } = getCurrentNewIndex(event)
    if (onColumnSortingChange) {
      onColumnSortingChange(currentIndex, newIndex, event)
    }
  }
  return (
    <StyledTableWrapper ref={ref} customStyle={wrapperStyle} className={className}>
      <StyledTable
        className="j-table"
        customStyle={{
          ...tableStyle,
          width: isColumnResizeable ? table.getCenterTotalSize() : tableStyle?.width
        }}
      >
        {isHeaderVisible ? (
          <StyledTHead className="j-table__thead" customStyle={headerStyle}>
            {/* eslint-disable-next-line sonarjs/cognitive-complexity */}
            {table.getHeaderGroups().map((headerGroup) => (
              <StyledTr
                key={headerGroup.id}
                className={`j-table__thead-tr j-table__thead-tr--${headerGroup.id}`}
                customStyle={headerRowStyle}
              >
                {isRowSortable ? (
                  <StyledTh
                    className="j-table__thead-th j-table__thead-th--drag"
                    customStyle={headerColumnStyle}
                  />
                ) : undefined}
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
                        headerColumnStyle={headerColumnStyle}
                      />
                    ))}
                  </SortableContext>
                </DndContext>
              </StyledTr>
            ))}
          </StyledTHead>
        ) : undefined}
        <StyledTBody className="j-table__tbody" customStyle={bodyStyle}>
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
                  bodyColumnStyle={bodyColumnStyle}
                  sortColumnStyle={sortColumnStyle}
                />
              ))}
            </SortableContext>
          </DndContext>
        </StyledTBody>
        {isFooterVisible ? (
          <StyledTFoot className="j-table__tfoot" customStyle={footerStyle}>
            {table.getFooterGroups().map((footerGroup) => (
              <StyledTr
                key={footerGroup.id}
                className={`j-table__tfoot-tr j-table__tfoot-tr--${footerGroup.id}`}
                style={footerRowStyle}
              >
                {isRowSortable ? (
                  <StyledTh
                    className="j-table__tfooter-th j-table__tfooter-th--drag"
                    customStyle={footerColumnStyle}
                  />
                ) : undefined}
                {footerGroup.headers.map((header) => (
                  <StyledTh
                    key={header.id}
                    className={`j-table__tfoot-th j-table__tfoot-th--${header.id}`}
                    colSpan={header.colSpan}
                    customStyle={footerColumnStyle}
                  >
                    {flexRender(header.column.columnDef.footer, header.getContext())}
                  </StyledTh>
                ))}
              </StyledTr>
            ))}
          </StyledTFoot>
        ) : undefined}
      </StyledTable>
      {isPaginationEnabled ? (
        <StyledPaginationWrapper
          paginationPosition={paginationPosition || 'left'}
          customStyle={paginationWrapperStyle}
        >
          <Pagination
            {...paginationProps}
            style={paginationStyle}
            current={pagination!.pageIndex + 1}
            pageSize={pageSize}
            total={
              Number.isInteger(pageSize) && Number.isInteger(totalPage)
                ? (pageSize as number) * (totalPage as number)
                : undefined
            }
            onChange={handleAntdPaginationChange}
          />
        </StyledPaginationWrapper>
      ) : undefined}
    </StyledTableWrapper>
  )
}

export const Table = React.forwardRef(TableInner) as <DataModel>(
  props: TableProps<DataModel> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof TableInner>
