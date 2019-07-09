import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL, ServerResponse, User } from '../types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  async userRegister(email: string, password: string, name: string) {
    return this.http.post(
      `${URL}/user/register`,
      { email, password, name }
    ).toPromise()
    .then((result: ServerResponse) => {
      if (result.code === 1) {
        return this.router.navigateByUrl('/signin');
      }
      throw new Error('Email exist!');
    });
  }
  signIn(email: string, password: string){
    return this.http.post(`${URL}/user/login`,{ email, password })
    .toPromise()
    .then((result: ServerResponse)=>{
      if(result.code === 1){
        // save user into store
        
        // save token
      }
      else{
        throw new Error('Email or password invalid!')
      }
    })
  }
}
