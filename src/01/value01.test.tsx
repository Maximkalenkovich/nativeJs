import {mult, splitIntoWords, sum} from "./value01";

let a: number
let b : number
let c: number
beforeEach(()=>{
    a = 1
    b = 2

})
test('sum be corret', ()=>{
    const result1 = sum(a,b)
    a = 100
    expect(result1).toBe(3)

})

test('mult be corret', ()=>{
    const result1 = mult(a,b)
    a=100
    expect(result1).toBe(2)
})

test('spliting into words correct', ()=>{
    const  sent1 = 'hello my friend'
    const sent2 =  'js programing language!'

    const  result1 = splitIntoWords(sent1)
    const  result2 = splitIntoWords(sent2)
     expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(3);
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('programing')
    expect(result2[2]).toBe('language')
})