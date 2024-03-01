import {
    addBook, changeArray,
    changeBook,
    changeHoses, deleteBook,
    moveUser,
    NumbersType, updateCompanyTitle,
    upgradeLaptope,
    UserWithBook,
    UserWithLaptop, WithCompanyType,
} from "./10_01";
import exp from "constants";


test.skip('change laptop', ()=>{
    let user: UserWithLaptop={
        name:'Dimych',
        hair:32,
        address:{
            city:'MINSK',
            house: 12
        },
        laptop:{
            title:'zenbook'
        }
    }
      const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})

test.skip('upgrade laptope', ()=>{
    let user: UserWithLaptop & UserWithBook={
        name:'Dimych',
        hair:32,
        address:{
            city:'MINSK',
            house: 12
        },
        laptop:{
            title:'zenbook'
        },
        books:['html','css','js','react']
    }
    const moverUser = upgradeLaptope(user, 'MACBOOK')


    expect(user).not.toBe(moverUser)
    expect(user.laptop).not.toBe(moverUser.laptop)
    expect(moverUser.laptop.title).toBe('MACBOOK')
    expect(user.laptop.title).toBe('zenbook')


})

test.skip('change house', ()=>{
    let user: UserWithLaptop & UserWithBook={
        name:'Dimych',
        hair:32,
        address:{
            city:'MINSK',
            house: 12
        },
        laptop:{
            title:'zenbook'
        },
        books:['html','css','js','react']
    }

    const newHouses = changeHoses(user, 13)


    expect(user).not.toBe(newHouses)
    expect(user.address.house).not.toBe(newHouses.address.house)
    expect(user.laptop).toBe(newHouses.laptop)
    expect(newHouses.address.house).toBe(13)
    expect(user.books).toBe(newHouses.books)
})

test.skip('add book', ()=>{
    let user: UserWithLaptop & UserWithBook={
        name:'Dimych',
        hair:32,
        address:{
            city:'MINSK',
            house: 12
        },
        laptop:{
            title:'zenbook'
        },
        books:['html','css','js','react']
    }

    const newBooks = addBook(user, 'ts')


    expect(user).not.toBe(newBooks)
    expect(user.laptop).toBe(newBooks.laptop)
    expect(user.address.house).toBe(newBooks.address.house)
    expect(user.books).not.toBe(newBooks.books)
    expect(newBooks.books[4]).toBe('ts')
})

test.skip('change new book', ()=>{
    let user: UserWithLaptop & UserWithBook={
        name:'Dimych',
        hair:32,
        address:{
            city:'MINSK',
            house: 12
        },
        laptop:{
            title:'zenbook'
        },
        books:['html','css','js','react']
    }

    const newChangeBooks = changeBook(user, 'js', 'ts')


    expect(user).not.toBe(newChangeBooks)
    expect(user.laptop).toBe(newChangeBooks.laptop)
    expect(user.address.house).toBe(newChangeBooks.address.house)
    expect(user.books).not.toBe(newChangeBooks.books)
    expect(newChangeBooks.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test.skip('change number', ()=>{

const numbers: NumbersType = {
    obj1: {
        prop1: "value1",
        prop2: 10
    },
    obj2: {
        prop3: "value2",
        prop4: true
    },
    obj3:
        {
        prop5: "value3",
        prop6: ["apple", "banana", "grape"]
    },
    array:[1,2,3,3,4,7,56,3453,23,5643562,6879879,98798,100]
}

const newArray = changeArray(numbers, 56, 777)

    expect(newArray.obj1).toEqual(numbers.obj1);
    expect(newArray.obj2).toEqual(numbers.obj2);
    expect(newArray.obj3).toEqual(numbers.obj3);
    expect(newArray.array).toContain(777);

})

test.skip('delete new book', ()=> {
    let user: UserWithLaptop & UserWithBook={
        name:'Dimych',
        hair:32,
        address:{
            city:'MINSK',
            house: 12
        },
        laptop:{
            title:'zenbook'
        },
        books:['html','css','js','react']
    }


    const remooveBook = deleteBook(user, 'js')


    expect(user).not.toBe(remooveBook)
    expect(user.laptop).toBe(remooveBook.laptop)
    expect(user.address.house).toBe(remooveBook.address.house)
    expect(user.books).not.toBe(remooveBook.books)
    expect(remooveBook.books[2]).toBe('react')
    expect(user.books.length).toBe(4)
    expect(remooveBook.books.length).toBe(3)
})
















test("companies", () => {
    let user: WithCompanyType & UserWithLaptop= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "MINSK",
            house: 12
        },
        laptop: {
            title: "zenbook"
        },
        companies: [
            { title: "it-incubator", id: 1 },
            { title: "epam", id: 2 }
        ]
    };

    const userCopy = updateCompanyTitle(user, 2, "EPAM") as WithCompanyType & UserWithLaptop

    expect(user).not.toBe(userCopy);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(userCopy.companies[1].title).toBe("EPAM");

});










