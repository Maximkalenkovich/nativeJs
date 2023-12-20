import {CityType} from "../02/02_02";
import {getBuildingWithStaffCount} from "../04/04";
import {createMessages, getStreetsTtilesOfGovermentBuilding, getStreetsTtilesOfHouses} from "./05";
import {create} from "domain";
import {createMessage} from "../03/03_02";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{id: 1, buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
            {id:2,buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
            {id: 3,buildedAt: 2020, repaired: false, address: {number: 200, street: {title: "Hogwarts street"}}}],

        governmentBuildings: [{type: "HOSPITAL", budget: 200000, staffCount: 200, address: {street: {title: "Central Str"}}},
            {type: "FIRE-STATION", budget: 500000, staffCount: 1000, address: {street: {title: "Souths park Str"}}}],

        citizensNumber: 1000000
    }
})


test.skip('',()=>{
    let streetsN = getStreetsTtilesOfGovermentBuilding(city.governmentBuildings)

    expect(streetsN.length).toBe(2)
    expect(streetsN[0]).toBe('Central Str')
    expect(streetsN[1]).toBe('Souths park Str')
})


test.skip('',()=>{
    let streetsName = getStreetsTtilesOfHouses(city.houses)

    expect(streetsName.length).toBe(3)
    expect(streetsName[0]).toBe('White street')
    expect(streetsName[1]).toBe('Happy street')
    expect(streetsName[1]).toBe('Hogwarts street')
})

test('',()=>{
let message = createMessages(city.houses)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('Hello guys from White street')
    expect(message[1]).toBe('Hello guys from Happy street')
    expect(message[2]).toBe('Hello guys from Hogwarts street')

})