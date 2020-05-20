import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-apt',
  templateUrl: './add-apt.component.html',
  styleUrls: ['./add-apt.component.css']
})
export class AddAptComponent implements OnInit {

  private aptForm;
  formItems;
  control: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.aptForm = this.formBuilder.group({
      activityType: '1',
      date: '',
      calories: '',
      minutes: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(aptData) {
    console.log(aptData);
  }
}
