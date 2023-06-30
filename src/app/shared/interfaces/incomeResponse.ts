import {IncomeData} from "./incomeData";

export interface IncomeResponse {
  status: boolean;
  message: string;
  data: IncomeData;
}
