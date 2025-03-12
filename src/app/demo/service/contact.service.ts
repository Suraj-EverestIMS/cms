import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../api/contact';

@Injectable()
export class ContactService {

    constructor(private http: HttpClient) { }

    getContacts() {
        return this.http.get<any>('assets/demo/data/contacts.json')
            .toPromise()
            .then(res => res.data as Contact[])
            .then(data => data);
    }
}
