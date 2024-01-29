import {ManType} from "./05";


let people: Array<ManType>= []

beforeEach(()=>{
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]

})


test.skip('should be should get array message',()=>{
  const message= people.map(man => `Hello ${man.name.split(' ')[0]}. Welcom to IT`)
expect(message.length).toBe(3)
    expect(message[0]).toBe('Hello Andrew. Welcom to IT')
    expect(message[1]).toBe('Hello Alexander. Welcom to IT')
    expect(message[2]).toBe('Hello Dmitry. Welcom to IT')

})