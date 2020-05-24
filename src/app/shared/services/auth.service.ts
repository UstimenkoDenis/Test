import { Injectable } from '@angular/core';

import { User } from './../interfaces';

@Injectable({
    providedIn: 'root'
}) 
export class AuthService {
    
    _apiBase = 'http://localhost:5000';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
        
    }
    async getUsers() {
      return await this.getResource(`/users/`)  
        
    }
    async getUser(id) {
        return await this.getResource(`/users/${id}`)  
          
    }
   
    async setUser(email, password) {
        const number = await this.getUserNumber();
        const newUser = {
            id: number,
            email: email,
            password: password,
            contacts: []
        };
        const response = await fetch(`${this._apiBase}/users/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newUser)
        });
        if(!response.ok){
            throw new Error('json error');
        }
        // localStorage.setItem('auth-token', newUser)
    }
    async getUserNumber() {
        const res = await this.getResource('/users/')
        const userNumber = res.length+1;
      return userNumber;
    }
    // setToken(token:string) {
    //     this.token = token
    // }
    // getToken():string {
    //     return this.token
    // }
    // isAuthenticated(): boolean {
    //     return !!this.token
    // }
    // logout() {
    //     this.setToken(null)
    //     localStorage.clear()
    // }
    
}