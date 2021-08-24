import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private url: string  = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getAllFlightDetails(){
    this.http.get(this.url+"flights")
  }
}
