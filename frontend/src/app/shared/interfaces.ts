export interface News{
    id?:number, 
    title:string, 
    content:string,
    news_date?:Date, 
    publish?:boolean,
    cover?:string
}

export interface NewCar{
    name:string, 
    type:string, 
    price:number, 
    color:string, 
    gearCase?:string, 
    Engine?:string, 
    gear?:string, 
    comment?:string,
    img?:File
}

export interface OldCar{
    id?:number,
    name:string, 
     type:string, 
    price:number,
    kilometrage:number, 
    color:string, 
    gearCase?:string, 
    engine?:string, 
    gear?:string, 
    ownerCount:number,
    description?:string,
    img?:File
}

export interface Dock{
    pts:string, 
    vin:string, 
    stateNumber:string, 
    insurance:boolean,
    car?:OldCar
}

export interface Person{
    name?:string, 
    login:string, 
    password:string,
    phone?:string, 
    adress?:string, 
    pasport?:string
}


