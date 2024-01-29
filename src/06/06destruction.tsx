import React from "react";

type TitleType = {
    title: string;
};

type AddressType = {
    street: TitleType;
};

export type ManType = {
    name: string;
    age: number;
    lesson: Array<{ title: string }>;
    address: AddressType;
};


type PropsType = {
 title:string
    man: ManType
}

export const ManComponent: React.FC<PropsType>= ({title,man})=>{
    //
    // const {title} = props
    // const {name} = props.man


    return(
        <div>
          <h1>{title}</h1>
            <div>{man.name}</div>

    </div>
    )
}