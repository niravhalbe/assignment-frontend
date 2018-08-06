import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  uri = 'http://localhost:60178';
  constructor(private http: HttpClient) { }

  addContact(Id, firstName, lastName, email, phone, status){
    const obj = {
      Id:Id,
      FirstName : firstName,
      LastName : lastName,
      Email : email,
      PhoneNumber : phone,
      Status: status
    }
    return this.http
          .post(`${this.uri}/contacts/upsert`, obj);
  }

  getContacts() {
      return this
           .http
           .get(`${this.uri}/contacts`);
  }

  getContactById(id) {
      return this
                .http
                .get(`${this.uri}/contacts/${id}/details`);
  }

  deleteContactById(id) {
      return this
                .http
                .delete(`${this.uri}/contacts/${id}`);
  }  
}
