export type Connection = {
  id: string
  name: string
  groupIds: string[]
  priceTypeIds: string[]
  salesRepresentativeIds: string[]
}

type Group = {
  id: string
  name: string
}

type PriceType = {
  id: string
  currency: Currency
}

type Currency = {
  id: string
  name: string
}

type SalesRepresentative = {
  id: string
  name: string
}

export const availableGroups: Group[] = [
  { id: '1', name: 'Group 1' },
  { id: '2', name: 'Group 2' },
  { id: '3', name: 'Group 3' },
  { id: '4', name: 'Group 4' },
  { id: '5', name: 'Group 5' },
]

export const availablePriceTypes: PriceType[] = [
  { id: '1', currency: { id: '1', name: 'USD' } },
  { id: '2', currency: { id: '2', name: 'EUR' } },
  { id: '3', currency: { id: '3', name: 'GBP' } },
  { id: '4', currency: { id: '4', name: 'JPY' } },
  { id: '5', currency: { id: '5', name: 'CAD' } },
]

export const availableSalesRepresentatives: SalesRepresentative[] = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Doe' },
  { id: '3', name: 'Alice' },
  { id: '4', name: 'Bob' },
  { id: '5', name: 'Charlie' },
]

// func to get random number from 0 to 4 (inclusive)
// const getRandomNumber = () => Math.floor(Math.random() * 5)

// create a list of connections, length 4 with random data given the available groups, price types, and sales representatives
// const connectionsGetter: Connection[] = Array.from(
//   { length: 4 },
//   (_, index) => ({
//     id: index.toString(),
//     name: `Connection ${index + 1}`,
//     groupIds: Array.from(
//       { length: getRandomNumber() },
//       () => availableGroups[getRandomNumber()].id,
//     ),
//     priceTypeIds: Array.from(
//       { length: getRandomNumber() },
//       () => availablePriceTypes[getRandomNumber()].id,
//     ),
//     salesRepresentativeIds: Array.from(
//       { length: getRandomNumber() },
//       () => availableSalesRepresentatives[getRandomNumber()].id,
//     ),
//   }),
// )

export const connections = [
  {
    id: '0',
    groupIds: ['2', '3', '4'],
    priceTypeIds: ['2', '3'],
    salesRepresentativeIds: ['5', '4', '1'],
  },
  {
    id: '1',
    name: 'Connection 2',
    groupIds: ['5'],
    priceTypeIds: ['2', '1'],
    salesRepresentativeIds: ['3', '2', '5'],
  },
  {
    id: '2',
    name: 'Connection 3',
    groupIds: ['3', '2'],
    priceTypeIds: ['3'],
    salesRepresentativeIds: ['2', '5'],
  },
  {
    id: '3',
    name: 'Connection 4',
    groupIds: ['3'],
    priceTypeIds: ['4', '3'],
    salesRepresentativeIds: ['4'],
  },
]
