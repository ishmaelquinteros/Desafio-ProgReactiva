import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Service/login.service';

@Injectable({
  providedIn: 'root'
})
export class ControlAccesoGuard implements CanActivate, CanLoad {
  
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const logueado = this.loginService.getToken()
      if (logueado) return true;
        this.router.navigate(['login']);
        return false;
  }
  
  canLoad(route: Route): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const logueado = this.loginService.getToken()
    if (logueado) return true;
      this.router.navigate(['login']);
      return false;  
  }
}
