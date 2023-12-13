import {studentType} from "../02/02";
import {addSkill, livingCityStudent, makeStudentActive} from "./03";

let student: studentType;

beforeEach(()=>{
    student = {
        id: 1,
        name: 'MAXIM',
        age: 24,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [{
            id: 1,
            title: 'HTML'
        },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'REACT'
            },
        ]
    }
})

test('new tech skill should be added to student', ()=> {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be active', ()=> {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)

})

test('student living', ()=> {

let res1 = livingCityStudent(student, 'Moscow')
    let res2= livingCityStudent(student, 'Minsk')
    expect(res1).toBe(false)
    expect(res2).toBe(true)

})
