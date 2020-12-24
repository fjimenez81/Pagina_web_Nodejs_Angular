import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../app/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private userService: UsersService, private router: Router) {}

  canActivate(): boolean {
      if (this.userService.status_login()) {
        return true
      }
      this.router.navigate(['/login'])
      return false
  }
    
  
}
