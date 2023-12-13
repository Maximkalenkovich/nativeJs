import {sum} from "./value01";

export {}

test('sum be corret', ()=>{
    const a = 1
    const b = 3

    const result = sum(a,b)
    expect(result).toBe(3)
})