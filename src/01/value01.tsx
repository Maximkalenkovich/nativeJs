


export const sentense = 'hello my friend'

export const splitIntoWords = (sentense: string) => {
    return sentense.toLowerCase().split(' ')
        .filter(w=> w !== '')
        .map(w => w.replace('!',''))

}


//function sum
export function sum(a: number,b: number)  {
    return a + b
}

export function mult (a: number, b: number) {
    return a * b
}


export const value01 = '01_01'