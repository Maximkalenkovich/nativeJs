import {governmentBuildingsType, HousesType} from "../02/02_02";


export const addMoneyToBudget = (b:governmentBuildingsType, budget: number) => {
 b.budget += budget


}

export const repairHouse = (h: HousesType) =>{
    h.repaired = true
}

export const toFireStuff = (staffCount: governmentBuildingsType, count: number) =>{
  return staffCount.staffCount = (staffCount.staffCount - count)
}
export const toHireStuff = (staffCount: governmentBuildingsType, count: number) =>{
    return staffCount.staffCount = (staffCount.staffCount + count)
}