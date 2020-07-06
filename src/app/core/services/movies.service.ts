import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError,tap} from 'rxjs/operators';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  layDanhSachPhim(): Observable<any>{
    return this.api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP01').pipe(
      tap((result)=>{
        console.log(result)
      }),
        
    );

  };
  layChiTietphim(maPhim:string): Observable<any>{
    let params = new HttpParams();
    params= params.append('maPhim', maPhim);
    params = params.append('maNhom', 'GP01')
    return this.api.get(`/QuanLyPhim/LayThongTinPhim`,{params})
  }

  constructor(private http: HttpClient, private api:ApiService) { }
  
  
}
