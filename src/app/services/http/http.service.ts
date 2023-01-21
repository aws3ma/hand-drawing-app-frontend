import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  server = '';
  httpOptions: any;
  constructor(private client: HttpClient) {
    this.server = 'http://127.0.0.1:8000';
  }
  // authentification
  /**
   *
   * @param data
   * @example {"username":x,"password":y}
   * @returns success : access and refresh tokens | fail : code and details
   */
  login(data: any) {
    return this.client.post(this.server + '/authentification/token/get', data);
  }
  /**
   *
   * @param data
   * @example {"username":x,"password":y}
   * @returns success : status | fail : code and details
   */
  signup(data: any) {
    return this.client.post(this.server + '/authentification/signup', data);
  }
  /**
   *
   * @returns success : user informations | fail : error code and details
   */
  userInformation() {
    return this.client.get(this.server + '/authentification/account', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('access'),
      }),
    });
  }
  /**
   *
   * @param data
   * @example {"password":y,"is_staff":true}
   * @returns success : user information | fail : error code and details
   */
  //  updateUser(data: any) {
  //   return this.client.put(this.server + '/authentification/account', data, {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer ' + localStorage.getItem('access')
  //     })
  //   });
  // }
  /**
   *
   * @returns success : access and refresh token | fail : error code and details
   */
  refreshToken(data: any) {
    // let data = {
    //   'refresh': localStorage.getItem('refresh')
    // }
    return this.client.post(
      this.server + '/authentification/token/refresh',
      data
    );
  }
  /**
   *
   * @param data
   * @example {"token":"ey...."}
   * @returns success : status code 200 | fail : error code and details
   */
  verifyToken(data: any) {
    return this.client.post(this.server + '/authentification/token/verify', data);
  }
  //image
  createImage(data: any) {
    return this.client.post(this.server + '/images', data, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('access'),
      }),
      reportProgress: true,
      responseType: 'json',
    });
  }
  getImage(id: any) {
    return this.client.get(this.server + '/images?original=' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('access'),
      }),
    });
  }
}
