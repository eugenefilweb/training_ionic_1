import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private storageService: StorageService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    return this.storageService.get('userData').then((res: any) => {
      if (res.value !== null && res.value !== undefined) {
        try {
          const userData = JSON.parse(res.value);
          
          if (userData !== null) {
            // User is authenticated, allow access
            return true;
          } else {
            // User data is invalid, redirect to the login page
            this.router.navigate(['/tabs/login']);
            return false;
          }
        } catch (error) {
          // JSON parsing error, redirect to the login page
          this.router.navigate(['/tabs/login']);
          return false;
        }
      } else {
        // User data is not available, redirect to the login page
        this.router.navigate(['/tabs/login']);
        return false;
      }
    });
  }
}
