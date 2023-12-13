
type LocalCityType={
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type studentType = {
    id: number
    age: number
    name: string
    isActive: boolean
    address:AddressType
    technologies: Array<TechnologiesType>
}
type TechnologiesType = {
    id: number
    title: string
}


const student: studentType = {
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

console.log(student.technologies[2].title)