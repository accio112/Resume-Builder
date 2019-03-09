import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, FormArray, NgForm} from '@angular/forms';
import { UserService } from '../shared/user.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.css']
})
export class SelectTemplateComponent implements OnInit {
  userDetails;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }


  ngOnInit() {
  }
  template1(){
    this.router.navigate(['/template']);
  }
  template2(){
    this.router.navigate(['/template2']);
  }
}
