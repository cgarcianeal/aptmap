import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MapService} from '../../_services/map.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-apt',
  templateUrl: './add-apt.component.html',
  styleUrls: ['./add-apt.component.css']
})
export class AddAptComponent implements OnInit {

  private aptForm;
  formItems;
  control: FormControl;

  constructor(private formBuilder: FormBuilder,
              private mapService: MapService,
              private router: Router) {
    this.aptForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      xcord: ['', Validators.required],
      ycord: ['', Validators.required],
      price: ['', Validators.required],
      region: ['', Validators.required],
      url: ['', Validators.required],
      studio: [false, Validators.required],
      wd: [false, Validators.required],
      dw: [false, Validators.required],
      ac: [false, Validators.required],
      pets: [false, Validators.required],
      parking: [false],
      createdDate: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(aptData) {
    console.log(aptData);

    aptData.createdDate = Date.now();

    this.mapService.addApt(aptData).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['']);
    })
  }
}
