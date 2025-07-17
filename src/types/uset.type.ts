

export interface IUserType{
    id:string,
    email:string,
    fullname:string
}

interface IRole {
    id?:string,
    name?:string
}
export interface IUserInfo {
    id?:string,
    firstName:string,
    fullname?:string |undefined,
    lastName:string,
    email:string,
    emailConfirmed?:boolean,
    phoneNumber:string,
    createdAt?:string |undefined,
    roles?: IRole[]
}