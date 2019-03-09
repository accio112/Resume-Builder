import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, FormArray, NgForm} from '@angular/forms';
import { UserService } from '../../shared/user.service'
import { Router } from "@angular/router";
import  jsPDF  from 'jspdf';
import  html2canvas from 'html2canvas'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  userDetails;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        // localStorage.setItem('id', res['id']);
      },
      err => {
        console.log(err);

      }
    );
  }

  pdfGenerate(){
    console.log("Downloading pdf ...");
    let doc = new jsPDF();
    // doc.text(20,20,'Hello world');
    // doc.save('Resume.pdf');
    html2canvas(document.querySelector("#cv")).then(canvas =>{
        var img = canvas.toDataURL('image/png');
        console.log(img);
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        var pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(img, 'JPEG', 0, 0,width,height);
        pdf.save('resume.pdf')
      })
  }

}
