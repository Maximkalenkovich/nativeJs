import {studentType} from "../02/02";


export const sum = (a: number,b: number) => {
    return a+b
}

export const addSkill = (student : studentType, skill: string) => {
student.technologies.push({id:new Date().getTime(), title: skill})
}

export const makeStudentActive = (s: studentType) => {
    s.isActive = true
}

export const livingCityStudent = (s: studentType, cityName: String)=> {
    return s.address.city.title === cityName
}