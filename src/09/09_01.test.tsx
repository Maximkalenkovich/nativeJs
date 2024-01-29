function increesAge(u:UserType) {
    u.age++
}
test.skip('big test', ()=>{

    const user: UserType = {
        name: 'Dima',
        age: 22
    }

increesAge(user)

    expect(user.age).toBe(23)

})
