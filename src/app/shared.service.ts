import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:63977/api";


  constructor(private http: HttpClient) { }

  getUserList(userID: number): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/users/' + userID)
  }

  addUserList(val: any) {
    return this.http.post(this.APIUrl + '/users', val);
  }

  updateUserList(val: any) {
    return this.http.put(this.APIUrl + '/users', val);
  }

  deleteUserList(val: any) {
    return this.http.delete(this.APIUrl + '/users', val);
  }






  getGelirGiderList(userID: number): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/gelirgider/' + userID)
  }

  getOdemeList(userID: number): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/odeme/' + userID)
  }


  getStokList(userID: number): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/stok/' + userID)
  }
  addUrunList(val: any) {
    return this.http.post(this.APIUrl + '/stok', val);
  }

}
