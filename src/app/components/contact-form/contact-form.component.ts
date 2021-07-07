import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  exform!: FormGroup;
  isChecked1 = false;
  isChecked2 = false;

  constructor() { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'NIP': new FormControl(null, [Validators.required, Validators.pattern(/\d{3}(-)\d{2}(-)\d{2}(-)\d{3}/gm)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'check1': new FormControl(null, Validators.requiredTrue),
      'phone': new FormControl(),
      'switch': new FormControl(),
      'message': new FormControl(),
      'checkAll': new FormControl(),
      'check2': new FormControl(),
      'dropdown': new FormControl('1')      
    });
  }

  checkAll(event: any)
  {
    if(event.target.checked)
    {
      this.isChecked1 = true;
      this.isChecked2 = true;
    }
    else if(!event.target.checked)
    {
      this.isChecked1 = false;
      this.isChecked2 = false;
    }
  }

  submit()
  {
    console.log(this.exform.value);
  }

}
