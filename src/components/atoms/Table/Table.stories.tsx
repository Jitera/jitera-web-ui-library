import { Story } from '@storybook/react'

import { Table, TableProps, TableColumnDefinition } from './Table.component'

export interface Person {
  id: number
  name: {
    firstName: string
    lastName: string
  }
  age: number
}

const defaultData: Person[] = [
  {
    id: 1,
    name: {
      firstName: 'A',
      lastName: 'A'
    },
    age: 10
  },
  {
    id: 2,
    name: {
      firstName: 'B',
      lastName: 'B'
    },
    age: 5
  },
  {
    id: 2,
    name: {
      firstName: 'C',
      lastName: 'C'
    },
    age: 8
  }
]

const columns: TableColumnDefinition<Person>[] = [
  {
    name: 'Name',
    path: 'name.firstName'
  },
  {
    name: 'Age',
    path: 'age'
  }
]

const defaultArguments: TableProps<Person> = { data: defaultData, columns }

const TableTemplate: Story<TableProps<Person>> = (arguments_) => {
  return <Table {...arguments_} />
}

export const Default = TableTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Table',
  component: Table
}
