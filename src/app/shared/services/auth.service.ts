import { Injectable } from '@angular/core';

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
      
    async setUser(name, email, password) {
        const number = await this.getUserNumber();
        const newUser = {
            id: number,
            name,
            email: email,
            password: password,
            contacts: [
                {
                    "id": 1,
                    "name": "Денис Устименко",
                    "email": "ustimenkodenis@mail.ru",
                    "phone": "+79635560362",
                    "website": "https://github.com/UstimenkoDenis"
                    
                },
                {
                    "id": 2,
                    "name": "Денис Устименко",
                    "email": "ustimenkodenis@mail.ru",
                    "phone": "+79635560362",
                    "website": "https://github.com/UstimenkoDenis"
                },
                {
                    "id": 3,
                    "name": "Денис Устименко",
                    "email": "ustimenkodenis@mail.ru",
                    "phone": "+79635560362",
                    "website": "https://github.com/UstimenkoDenis"
                }
            ]
        };
        console.log(newUser)
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
    }
    async getUserNumber() {
        const res = await this.getResource('/users/')
        const userNumber = res.length+1;
      return userNumber;
    }
    async getSaveNumber() {
        const res = await this.getResource('/users/')
        const saveNumber = res.length;
      return saveNumber;
    }
    
    async saveUser (saved) {
        
    const response = await fetch(`${this._apiBase}/users/${saved.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(saved)
        });
        if(!response.ok){
            throw new Error('json error');
        }     
    }
}