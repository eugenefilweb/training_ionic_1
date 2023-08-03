import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  //   private ObjectToFormData(obj: Object): FormData {
  //     let formData: FormData = new FormData();
  //     Object.entries(obj).forEach((entry) => {
  //       const [key, value]: [key: string, value: any] = entry;
  //       formData.append(key, value.toString());
  //     });

  //     return formData;
  //   }

loginPost(serviceName: string, param: any) {
    console.log('service');
    const url: any = environment.apiUrl + serviceName;
    return this.http.post(url, param);
  }

}
