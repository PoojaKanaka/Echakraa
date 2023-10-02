import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

export interface ILoginPost {
  userId: string;
  password: string;
}

export interface ILoginRes {
  token: string;
  role: string;
  fullUsername: string;
  userId: string;
  error: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(payload: ILoginPost) {
    return this.http.post<Observable<ILoginRes>>(
      `${environment.SERVER_URL}/Login`,
      payload
    );
  }
}
