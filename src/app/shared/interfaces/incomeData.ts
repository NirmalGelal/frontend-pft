import {User} from "./user";

export interface IncomeData{
  id: number,
  user: User,
  amount: number,
  category: string,
  description: string
}
