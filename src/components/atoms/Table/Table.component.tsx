import React, { useMemo } from 'react'

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import {
  ColumnDef,
  createColumnHelper,
  DeepKeys,
  getSortedRowModel,
  OnChangeFn,
  PaginationState,
  RowData
} from '@tanstack/table-core'

import { CSSObject } from 'styled-components'

import { Icon, IconProps } from '@components/atoms/Icon/Icon.component'

import { StyledTable, StyledTableWrapper, StyledTd, StyledTh } from './Table.styles'

export { createColumnHelper } from '@tanstack/react-table'

export interface TableColumnDefinition<DataModel extends RowData> {
  name: string
  path: DeepKeys<DataModel>
  sortable?: boolean
}

export interface TableProps<DataModel extends RowData> {
  data: DataModel[]
  columns: TableColumnDefinition<DataModel>[]
  style?: CSSObject

  isHeaderVisible?: boolean
  isFooterVisible?: boolean

  ascendingIconProps?: IconProps
  descendingIconProps?: IconProps

  isPaginationEnabled?: boolean
  totalPage?: number
  pageIndex?: number
  pageSize?: number
  onPaginationChange?: OnChangeFn<PaginationState>
}

const TableInner = <DataModel,>(
  {
    data,
    columns,
    style,

    isHeaderVisible = true,
    isFooterVisible,

    ascendingIconProps,
    descendingIconProps,

    isPaginationEnabled,
    totalPage,
    pageIndex,
    pageSize,
    onPaginationChange
  }: TableProps<DataModel>,
  ref: React.ForwardedRef<HTMLTableElement>
) => {
  const columnHelper = createColumnHelper<DataModel>()
  const formattedColumns = useMemo<ColumnDef<DataModel, any>[]>(
    () =>
      columns.map((column) =>
        columnHelper.accessor(column.path, {
          header: column.name,
          footer: column.name,
          cell: (info: any) => info.getValue()
        })
      ),
    [columnHelper, columns]
  )
  const pagination = useMemo(
    () => (isPaginationEnabled ? ({ pageIndex, pageSize } as PaginationState) : undefined),
    [isPaginationEnabled, pageIndex, pageSize]
  )
  const table = useReactTable({
    data,
    columns: formattedColumns,
    pageCount: totalPage,
    state: {
      pagination
    },
    manualPagination: isPaginationEnabled,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange
  })
  return (
    <StyledTableWrapper style={style}>
      <StyledTable ref={ref} className="jitera-table">
        {isHeaderVisible ? (
          <thead className="jitera-table__thead">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className={`jitera-table__thead-tr jitera-table__thead-tr--${headerGroup.id}`}
              >
                {headerGroup.headers.map((header) => (
                  <StyledTh
                    key={header.id}
                    className={`jitera-table__thead-th jitera-table__thead-th--${header.id}`}
                    colSpan={header.colSpan}
                    canSort={header.column.getCanSort()}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: ascendingIconProps ? <Icon {...ascendingIconProps} /> : ' 🔼',
                      desc: descendingIconProps ? <Icon {...descendingIconProps} /> : ' 🔽'
                    }[header.column.getIsSorted() as string] ?? null}
                  </StyledTh>
                ))}
              </tr>
            ))}
          </thead>
        ) : undefined}
        <tbody className="jitera-table__tbody">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={`jitera-table__tbody-tr jitera-table__tbody-tr--${row.id}`}>
              {row.getVisibleCells().map((cell) => (
                <StyledTd
                  key={cell.id}
                  className={`jitera-table__tbody-td jitera-table__tbody-td--${cell.id}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTd>
              ))}
            </tr>
          ))}
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
    </StyledTableWrapper>
  )
}

export const Table = React.forwardRef(TableInner) as <DataModel>(
  props: TableProps<DataModel> & { ref?: React.ForwardedRef<HTMLTableElement> }
) => ReturnType<typeof TableInner>
