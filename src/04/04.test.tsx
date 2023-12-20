import {CourseType} from "./04";

test('should take old men older then 90', ()=>{
    const ages = [18,20,39,1,100,14]

    const oldAges = ages.filter(ages => ages > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take course  expensiv 160', ()=>{
    const courses = [
        {title:'CSS', price:100},
        {title:'JS', price:150},
        {title:'REACT', price:200},
    ]
const cheapCourses = courses.filter(courses=> courses.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].title).toBe('JS')
})

test('pay bread ore not', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'solt', isDone: false},
        {id: 4, title: 'sugar', isDone: true}
    ]

    const completedTask = tasks.filter(task => !task.isDone)

    expect(completedTask.length).toBe(2)
    expect(completedTask[0].id).toBe(1)
    expect(completedTask[1].id).toBe(3)
})

