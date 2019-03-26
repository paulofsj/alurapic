import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photos";


const API:any = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

        constructor(private http: HttpClient) {}

        listFromUser(userName) {
            return this.http
            .get<Photo[]>(API + '/flavio/photos')
        }
}