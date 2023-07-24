import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_BASE_URL} from "../constants";
import {Injectable} from "@angular/core";
import {DynamicDialogRef} from "primeng/dynamicdialog";
@Injectable()
export class DataService{
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
      })
    };
  ref: DynamicDialogRef | undefined;
  constructor(private http: HttpClient) {
  }
  getIncomes() {
    return this.http.get<any>(API_BASE_URL + '/income', this.httpOptions);
  }

  deleteIncome(id: number) {
    const URL  = API_BASE_URL+'/income/'+ id
    return this.http.delete(URL, this.httpOptions);
  }

  closeDialogBox(){
    this.ref?.close();
  }


}
