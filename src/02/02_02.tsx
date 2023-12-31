
export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HousesType = {
    buildedAt: number
    repaired:boolean
    address: AddressType
    id: number
}



export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number


}

export type governmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}