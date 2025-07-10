export interface ILogin {
    email: string,
    password: string
}
export interface ApiValidationErrors {
    [key: string]: string[] | undefined;
}
 export interface ISenEmail {
    email: string,
}
export type ParsedFormErrors = {
    [key: string]: string;
};
export interface IVerfCode {
    email: string,
    code: string
}
export interface IRegister {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string
}


export interface IResedPassword {
    email: string;
    newPassword: string,
    confirmNewPassword: string,
}