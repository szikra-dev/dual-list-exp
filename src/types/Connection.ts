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

export const connections = [
  {
    id: '0',
    name: 'The Enchanted Emporium',
    groupIds: ['2', '3', '4'],
    priceTypeIds: ['2', '3'],
    salesRepresentativeIds: ['5', '4', '1'],
  },
  {
    id: '1',
    name: 'Mystic Meadows',
    groupIds: ['5'],
    priceTypeIds: ['2', '1'],
    salesRepresentativeIds: ['3', '2', '5'],
  },
  {
    id: '2',
    name: 'Stellar Supplies',
    groupIds: ['3', '2'],
    priceTypeIds: ['3'],
    salesRepresentativeIds: ['2', '5'],
  },
  {
    id: '3',
    name: 'Twilight Treasures',
    groupIds: ['3'],
    priceTypeIds: ['4', '3'],
    salesRepresentativeIds: ['4'],
  },
  {
    id: '4',
    name: 'Urban Oasis Outlet',
    groupIds: ['1'],
    priceTypeIds: ['1'],
    salesRepresentativeIds: ['1'],
  },
  {
    id: '5',
    name: 'Whimsy Warehouse',
    groupIds: ['2'],
    priceTypeIds: ['2'],
    salesRepresentativeIds: ['2'],
  },
  {
    id: '6',
    name: 'Crescent Corner',
    groupIds: ['3'],
    priceTypeIds: ['3'],
    salesRepresentativeIds: ['3'],
  },
  {
    id: '7',
    name: 'The Curious Cabinet',
    groupIds: ['4'],
    priceTypeIds: ['4'],
    salesRepresentativeIds: ['4'],
  },
  {
    id: '8',
    name: 'Serenity Shoppe',
    groupIds: ['5'],
    priceTypeIds: ['5'],
    salesRepresentativeIds: ['5'],
  },
  {
    id: '9',
    name: 'Aurora Aisle',
    groupIds: ['1'],
    priceTypeIds: ['1'],
    salesRepresentativeIds: ['1'],
  },
  {
    id: '10',
    name: 'Harmony Haven',
    groupIds: ['2', '3', '4'],
    priceTypeIds: ['2', '3'],
    salesRepresentativeIds: ['5', '4', '1'],
  },
  {
    id: '11',
    name: 'Phoenix Finds',
    groupIds: ['5'],
    priceTypeIds: ['2', '1'],
    salesRepresentativeIds: ['3', '2', '5'],
  },
  {
    id: '12',
    name: 'Radiant Realms',
    groupIds: ['3', '2'],
    priceTypeIds: ['3'],
    salesRepresentativeIds: ['2', '5'],
  },
  {
    id: '13',
    name: 'Dreamscape Depot',
    groupIds: ['3'],
    priceTypeIds: ['4', '3'],
    salesRepresentativeIds: ['4'],
  },
  {
    id: '14',
    name: 'Elysian Essentials',
    groupIds: ['1'],
    priceTypeIds: ['1'],
    salesRepresentativeIds: ['1'],
  },
  {
    id: '15',
    name: 'Celestial Cart',
    groupIds: ['2'],
    priceTypeIds: ['2'],
    salesRepresentativeIds: ['2'],
  },
  {
    id: '16',
    name: 'Velvet Ventures',
    groupIds: ['3'],
    priceTypeIds: ['3'],
    salesRepresentativeIds: ['3'],
  },
  {
    id: '17',
    name: 'Horizon Hub',
    groupIds: ['4'],
    priceTypeIds: ['4'],
    salesRepresentativeIds: ['4'],
  },
  {
    id: '18',
    name: 'Luna Luxe',
    groupIds: ['5'],
    priceTypeIds: ['5'],
    salesRepresentativeIds: ['5'],
  },
  {
    id: '19',
    name: 'Haven of Wonders',
    groupIds: ['1'],
    priceTypeIds: ['1'],
    salesRepresentativeIds: ['1'],
  },
]
