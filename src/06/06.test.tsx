type TitleType = {
    title: string;
};

type AddressType = {
    street: TitleType;
};

type ManType = {
    name: string;
    age: number;
    lesson: Array<{ title: string }>;
    address: AddressType;
};

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Maxim',
        age: 25,
        lesson: [{ title: '1' }, { title: '2' }],
        address: {
            street: {
                title: 'Nezavisimosti Street',
            },
        },
    };
});

test.skip('', () => {
    // const age = props.age
    // const lessons = props.lesson



    const {age, lesson} = props;
    expect(age).toBe(25);
    expect(lesson.length).toBe(2)

})



