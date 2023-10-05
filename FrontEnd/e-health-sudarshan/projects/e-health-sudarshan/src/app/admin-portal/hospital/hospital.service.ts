import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/e-health-sudarshan/src/environments/environment.development';

export interface IHospital {
  hospitalId?: number;
  hospitalName: string;
  registrationNumber: string;
  mobileNumber?: string;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  private URL = `${environment.SERVER_URL}/api/Hospitals`;

  constructor(private http: HttpClient) {}

  createHospital(data: IHospital) {
    return this.http.post(`${this.URL}/HospitalRegistration`, data);
  }

  getAllHospitalData() {
    return this.http.post<IHospital[]>(`${this.URL}/GetAllHospitals`, null);
  }
}
