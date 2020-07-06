import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL: string = 'http://movie0706.cybersoft.edu.vn/api';
  handleError(error){
    switch (error.status){
      case 404: {
        //show lỗi
        console.log('lỗi 404')
      };break;
      case 500: {
        console.log('lỗi server')
      };break;
      default:
        break;
    }
    return throwError(error)
  }

  constructor(private http: HttpClient) { }

  get(path: string, options?:any): Observable<any>{
    return this.http.get(`${this.BASE_URL}/${path}`, options).pipe(catchError(this.handleError))
  };
  post(path:string, body:any, options?:any): Observable<any>{
    return this.http.post(`${this.BASE_URL}/${path}`,body,options).pipe(catchError(this.handleError))
  };
  put(path:string, body:any, options?:any): Observable<any>{
    return this.http.put(`${this.BASE_URL}/${path}`,body,options).pipe(catchError(this.handleError))
  };
  delete(path:string,options?:any): Observable<any>{
    return this.http.delete(`${this.BASE_URL}/${path}`,options).pipe(catchError(this.handleError))
  };
  
}
