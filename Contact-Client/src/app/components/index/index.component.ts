import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  contacts: any[];
  constructor(private contactService: ContactService,private router: Router) { 
  }

  ngOnInit() {
    this.contactService
      .getContacts()     
      .subscribe((data: any[]) => {
      this.contacts = data;
    });
  }

  deleteContact(id){
    this.contactService.deleteContactById(id).subscribe(res => {
      console.log('Deleted');
      this.router.navigate(['index']);
    });
  }
}
