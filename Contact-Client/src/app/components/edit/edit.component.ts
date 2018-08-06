// edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  contact: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
          firstName: ['', Validators.required ],
          lastName: ['', Validators.required ],
          email:['', Validators.required ],
          phone:['',[Validators.pattern(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?/)]],
          status:[]
         });
      }

    ngOnInit() {
        this.route.params.subscribe(params => {
          this.contactService.getContactById(params['id']).subscribe(res => {
            this.contact = res;
        });
      });
    }

    updateContact(firstName, lastName, email, phoneNumber, status) {
      this.route.params.subscribe(params => {
         this.contactService.addContact(params['id'], firstName, lastName, email, phoneNumber, status ).subscribe(res =>{
          this.router.navigate(['index']);
         });
      });
    }
}