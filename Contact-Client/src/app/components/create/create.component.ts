import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ContactService } from '../../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private contactService: ContactService, private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', [Validators.required,Validators.email]],
      phone:['',[Validators.pattern(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?/)]],
      status: []
   });
  }

createContact(firstName, lastName, email, phone, status) {
    this.contactService.addContact(null,firstName, lastName, email, phone, status).subscribe(res=>{
      this.router.navigate(['index']);
    });
}

  ngOnInit() {
  }

}