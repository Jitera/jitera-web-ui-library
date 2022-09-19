import { useCallback } from '@storybook/addons'
import { Story } from '@storybook/react'
import { PaginationState, SortingState } from '@tanstack/table-core'
import { Space } from 'antd'
import { useEffect, useMemo, useState } from 'react'

import { Button } from '../Button/Button.component'

import { Table, TableProps, TableColumnDefinition } from './Table.component'

export interface AnimeAired {
  startDate: number
  endDate?: number
}

export interface Anime {
  MAL_ID: number
  Name: string
  Score: number
  Genres: string[]
  'English name': string
  'Japanese name': string
  Type: string
  Episodes: string
  Aired: AnimeAired
  Premiered: string
  Producers: string[]
  Licensors: string[]
  Studios: string[]
  Source: string
  Duration: string
  Rating: string
  Ranked: number
  Popularity: number
  Members: number
  Favorites: number
  Watching: number
  Completed: number
  'On-Hold': number
  Dropped: number
  'Plan to Watch': number
  'Score-10': number
  'Score-9': number
  'Score-8': number
  'Score-7': number
  'Score-6': number
  'Score-5': number
  'Score-4': number
  'Score-3': number
  'Score-2': number
  'Score-1': number
}

export interface AnimeApiResponse {
  data: Anime[]
  total: number
  page: number
  size: number
  first: string
  last: string
  prev: string | null
  next: string | null
}

function toQueryParameters(object: Record<string, string>) {
  const queryParameters = new URLSearchParams()
  for (const [key, value] of Object.entries(object)) {
    if (value) {
      queryParameters.append(key, value)
    }
  }
  return queryParameters.toString()
}

const useLazyFetch = () => {
  const [response, setResponse] = useState<AnimeApiResponse>()
  const getData = useCallback((parameters?: Record<string, string>) => {
    const queryParameters = toQueryParameters(parameters || {})
    return fetch(`https://anime-api-one.vercel.app/api/anime?${queryParameters}`)
      .then((_) => (_.ok ? _.json() : undefined))
      .then((result: AnimeApiResponse) => {
        setResponse(result)
        return result
      })
  }, [])
  return {
    getData,
    response
  }
}

const TableTemplate: Story<TableProps<Anime>> = () => {
  const [metadata, setMetadata] = useState<Omit<AnimeApiResponse, 'data'>>({
    total: 0,
    page: 0,
    size: 0,
    first: '',
    last: '',
    prev: null,
    next: null
  })
  const [data, setData] = useState<Anime[]>([])
  const { getData } = useLazyFetch()
  const getAnime = useCallback(
    (parameters: Record<string, string> = {}) => {
      getData(parameters).then((a) => {
        setData(a.data)
        setMetadata({
          total: a.total,
          page: a.page,
          size: a.size,
          first: a.first,
          last: a.last,
          prev: a.prev,
          next: a.next
        })
      })
    },
    [getData]
  )
  useEffect(() => {}, [])
  const columns = useMemo<TableColumnDefinition<Anime>[]>(
    () => [
      { name: 'Name', path: 'Name' },
      { name: 'Score', path: 'Score' }
    ],
    []
  )
  const actions = useMemo<TableColumnDefinition<Anime>[]>(
    () => [
      {
        name: 'Action',
        renderColumn() {
          return (
            <Space>
              <Button danger>Delete</Button>
              <Button>Edit</Button>
            </Space>
          )
        }
      }
    ],
    []
  )
  const handleSortingChange = useCallback(
    (sorting: SortingState) => {
      getAnime({ sort: sorting?.[0]?.desc ? 'desc' : 'asc', sortBy: sorting?.[0]?.id })
    },
    [getAnime]
  )
  const handlePaginationChange = useCallback(
    (pagination: PaginationState) => {
      getAnime({ page: String(pagination.pageIndex + 1), size: String(pagination.pageSize) })
    },
    [getAnime]
  )
  return (
    <Table
      data={data}
      columns={columns}
      actions={actions}
      isResizeable
      isPaginationEnabled
      totalPage={metadata?.total}
      onSortingChange={handleSortingChange}
      onPaginationChange={handlePaginationChange}
    />
  )
}

export const Default = TableTemplate.bind({})

export default {
  title: 'Atoms/Table',
  component: Table
}
