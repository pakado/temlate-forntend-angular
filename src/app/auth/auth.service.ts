import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterPayload} from "./register/registerPayload";
import {Observable} from "rxjs";
import {LoginPayload} from "./login/loginPayload";
import {JwtAutResponse} from "./jwt-aut-response";
import {map} from "rxjs/operators";
import {LocalStorageService} from "ngx-webstorage";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: String = "http://localhost:8080/api/auth/";
  public jwtAutResponse: JwtAutResponse;

  constructor(private router: Router, private httpClient: HttpClient, private localStorageService: LocalStorageService) {
  }

  public register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + "signup", registerPayload);
  }

  public login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAutResponse>(this.url + "login", loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }

  public isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
    this.router.navigateByUrl("/login");
  }
}
