import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface UserData {
  id: number;
  nom: string;
  prenom: string;
  Address: string;
  City: string;
  status: number;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {}
  url="http://localhost:9090/users" ; 

  //connect front ->  backend
  getusers(limit:any, offset :any ):Observable <any> {
    const params = new HttpParams().set('limit', limit.toString()).set('offset', offset.toString());
        // return   this.http.get<UserData>(`http://localhost:9090/users/${pagesize}`)
        return   this.http.get<UserData>(`http://localhost:9090/users`,{params})
        
    }

    //create data 
    createdata(data:any):Observable<any>{
      return this.http.post("http://localhost:9090/users",data) ;
    }


    //update les donnes 
    updatedata(data:any ,id:number):Observable<any>{
      return this.http.post(`http://localhost:9090/users/update/${id}`,data)

    }

    //delete users 
    deletedata(data :any  ,id:number){
      // return this.http.delete(`http://localhost:9090/users/${id}`) ;
      // console.log(id)
      return this.http.post(`http://localhost:9090/users/delete/${id}`,data) ;
    }
}
