import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { walletdata } from '../Models/model';

import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService implements OnInit {

  recievedData: walletdata[];

  constructor(private http: HttpClient) { }
  ngOnInit() {

  }
  onCreateWallet(reqobj) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'appliation/Json'

      })
    }
    return this.http.post('http://localhost:3000/posts/1',reqobj,httpOptions);
    }
    onGetwallet(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type' : 'appliation/Json'
  
        })
      }
      return this.http.get('http://localhost:3000/posts',httpOptions);
      }

  }


