export interface UserDTO {
    firstName: string;
    middleName: string;
    lastName: string;
    email:string;
    userId:string;
    password:string;
    userAddressDTO:UserAddressDTO[];
  }
   
  export interface UserAddressDTO {
    type:string;
    address1: string;
    address2: string;
    street:string;
    city:string;
    pinCode:string;
  }