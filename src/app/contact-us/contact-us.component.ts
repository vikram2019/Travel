import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contact: FormGroup;

  constructor(private formBuilder: FormBuilder) { }


  initializeForm() {
    this.contact = this.formBuilder.group({
      yourName: ['', [
        Validators.required
      ]],
      email:['',[
        Validators.required,
        Validators.email
      ]],
      yourMob:['',[
        Validators.required
      ]],
      location:['',[
        Validators.required
      ]],
      enquiry_for: ['', [
        Validators.required,
        // Validators.minLength(3),
        // Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,16}$')
      ]],
      message:['',[

      ]]
    })
  }


  contactRecord(){
    console.log(this.contact.value);
    this.contact.value.data = 10
    console.log(this.contact.value)
  }


  ngOnInit() {
    this.initializeForm()
  }

}
