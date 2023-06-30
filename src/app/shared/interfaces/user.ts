import {Role} from "./role";

export interface User{
  id: number,
  name: string,
  email: string,
  password: string,
  role_id: Role,
  phone_number: string,
  address: string
}
