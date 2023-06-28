import {HttpClient} from "@angular/common/http";
import {API_BASE_URL} from "../constants";

export class DataService{
  constructor(private http: HttpClient) {
  }
  getIncomes(){
    this.http.get<any>(API_BASE_URL).subscribe(
      (response) => {
        console.log(response); // Handle the response data here
      },
      (error) => {
        console.error(error); // Handle any errors that occur
      }
    );
  }
}
