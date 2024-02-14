import { Jam } from './../model/jam.model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class JamService {
    constructor(private http: HttpClient) { }

    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    requestOptions = {
        headers: new HttpHeaders(this.headerDict),
    }

    private dataUrl = "http://localhost:8080/api/jams";

     getAllJams(){
        return this.http.get<Jam[]>(this.dataUrl, this.requestOptions);
    }
    
}