import {HttpClient} from "@angular/common/http";
import {API_BASE_URL} from "../constants";
import {Injectable} from "@angular/core";

@Injectable()
export class DataService{
  constructor(private http: HttpClient) {
  }
  getIncomes() {
    return this.http.get<any>(API_BASE_URL+'/incomes',{});
  }
}
// return this.http.get<GenericResponse<CustomPageResponse<UserDto[]>>>(
//   ApiConstant.ENDPOINT + '/' + ApiConstant.SYSTEMUSERS_PAGE,{params}
// );
