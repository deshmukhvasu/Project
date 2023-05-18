import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  cartData = new Subject();

  constructor(private httpClient: HttpClient) { }



  public login(url: string, payload: Object) {
    return this.httpClient.post(url, payload);

  }

  public getMethod(url:string){
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('authorization', 'bearer '+localStorage.getItem('accessToken'));
    return this.httpClient.get(url,{ 'headers': headers }); 
  }
  public postMethod(url:string,payload:object){
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('authorization', 'bearer '+localStorage.getItem('accessToken'));
    return this.httpClient.post(url,payload,{ 'headers': headers }); 
  }
}
