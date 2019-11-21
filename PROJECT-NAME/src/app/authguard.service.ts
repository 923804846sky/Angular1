import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate {
    constructor(
        public router: Router
        ) {}
    
    canActivate() {
        const token = window.sessionStorage.getItem('auth_token');
        if (!token) { //判断token是否存在，如果不存在则跳转到登陆页面
            this.router.navigate(['/jstask5']);
            return false; 
        }
        return true;//判断token是否存在，如果存在则继续进行
    }
}