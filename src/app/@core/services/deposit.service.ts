import { Injectable } from '@angular/core';
import { UrlBack } from './urlEnum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private urlBase = UrlBack.BASE_TEST + '/api/deposits';

  constructor(private http: HttpClient) { }


  public listAll(): Observable<any> {
    return this.http.get(this.urlBase)
  }
}
