import {CityType, governmentBuildingsType} from "../02/02_02";
import {type} from "os";

const ages = [18,20,39,1,100,98,14]

const predicat = (age:number) =>{
  return age>91
}

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title:'CSS', price:100},
    {title:'JS', price:150},
    {title:'REACT', price:200},
    ]
//< 160
const cheapCourses = (course:CourseType)=>{
    return course.price < 160
}
const chipCpurses = [
    {title:'CSS', price:100},
    {title:'js', price:150}
]


export function demolishHousesTheStreet(city: CityType, street: string) {
    city.houses.filter((h)=>{h.address.street.title})
}


export function getBuildingWithStaffCount(building:Array<governmentBuildingsType>  ,staffCount:number){
   return  building.filter((g)=>{g.staffCount > staffCount})
}