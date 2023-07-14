import {GeneralResponse} from "./generalResponse";
import {Tokens} from "./tokens";

export interface AuthResponseData extends GeneralResponse{
  data: Tokens;
}
