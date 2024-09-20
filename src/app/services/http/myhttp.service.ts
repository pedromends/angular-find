import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Access-Control-Allow-Origin', "*"); 
  }

  post(url:string, data: any) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
  
  get(url: string)  {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  put(url:string, data: any) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers: headers
    });
  }

  delete(url:string) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    });
  }
}
