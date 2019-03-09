import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../shared/user.service";
import  jsPDF  from 'jspdf';
import  html2canvas from 'html2canvas'

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css']
})
export class Template2Component implements OnInit {
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
      var pdf = new jsPDF("p", "mm", "a3");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(img, 'JPEG', 0, 0,width,height);
      pdf.save('resume.pdf')
    })
  }


}
