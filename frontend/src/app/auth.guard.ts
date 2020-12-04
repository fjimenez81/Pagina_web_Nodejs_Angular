import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsersService } from '../app/services/users.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UsersService, private router: Router) {}

  canActivate(): boolean {
      if (this.userService.status_login() && this.userService.is_admin()) {
        return true
      }
      this.router.navigate(['/login'])
      return false
  }
  
}
