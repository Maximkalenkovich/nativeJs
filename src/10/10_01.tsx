import exp from "constants";

export type UserTypee = {
    name:string
    hair: number
    address:{city:string,house?:number}
}

export type LaptopType = {
    title: string
}
export type UserWithLaptop = UserTypee & {
    laptop: LaptopType
}

export type UserWithBook = UserTypee & {
    books: string[]
}

export type NumbersType = {
    obj1: {
        prop1: string;
        prop2: number;
    };
    obj2: {
        prop3: string;
        prop4: boolean;
    };
    obj3: {
        prop5: string;
        prop6: string[];
    };
    array: number[];
};



export function moveUser(u: UserWithLaptop, city:string){

  return  {
     ...u,
       address: {
         ...u.address,
         city:city
       }
   }

}

export function upgradeLaptope(u: UserWithLaptop & UserWithBook, title:string){
    return {
        ...u,
        laptop:{
            ...u.laptop,
          title:title
        }
    }
}

export function changeBook(u: UserWithLaptop & UserWithBook,oldBook:string, newBook: string){
    return  {
        ...u,
        books:u.books.map(b => b === oldBook ? newBook: oldBook)
    }
}
export function changeHoses(u: UserWithLaptop & UserWithBook, house:number){
    return  {
        ...u,
        address: {
            ...u.address,
           house:house
        }
    }

}

export function addBook(u: UserWithLaptop & UserWithBook, newBook: string){
    return  {
        ...u,
        books:[...u.books,newBook]

    }

}


export function changeArray(n: NumbersType, oldNum: number,newNum:number){
    return  {
        ...n,
        array:n.array.map(num => num === oldNum? newNum: num)
    }
}





