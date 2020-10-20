import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class OwnerService {
  public API = '//thawing-chamber-47973.herokuapp.com';
  public OWNER_API = this.API + '/owners';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.OWNER_API);
  }

  getById(id: string) {
    return this.http.get(this.OWNER_API + '/' + id);
  }

  getByDni(dni: string) {
    return this.http.get(this.API + '/owner?dni=' + dni);
  }

  save(owner: any): Observable<any> {
    console.log(owner)
    let result: Observable<Object>;
    if (owner['href']) {
      result = this.http.put(owner.href, owner);
    } else {
      result = this.http.post(this.OWNER_API, owner);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
