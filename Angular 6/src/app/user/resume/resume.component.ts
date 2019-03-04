import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, FormArray, NgForm} from '@angular/forms';
import { UserService } from '../../shared/user.service'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  serverErrorMessages: string;
    name = new FormControl('');
    profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email:['',Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ]),
      projects: this.fb.array([
        this.fb.control('')
      ]),
      achievements: this.fb.array([
        this.fb.control('')
      ])
    });
    addAlias() {
      this.aliases.push(this.fb.control(''));
    }
    addProject() {
    this.projects.push(this.fb.control(''));
    }
    addAchievement(){
      this.achievements.push(this.fb.control(''));
    }
    get aliases() {
      return this.profileForm.get('aliases') as FormArray;
    }
    get projects() {
    return this.profileForm.get('projects') as FormArray;
    }
    get achievements(){
    return this.profileForm.get('achievements') as FormArray;
    }
    updateName() {
      this.name.setValue('Nancy');
    }

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.profileForm.value);
      this.userService.postDetails(this.profileForm.value).subscribe(
        res => {
          // this.showSucessMessage = true;
          // setTimeout(() => this.showSucessMessage = false, 4000);
          // this.resetForm(this.profileForm);
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          else
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }
      );
    }

    updateProfile() {
      this.profileForm.patchValue({
        firstName: 'Nancy',
        address: {
          street: '123 Drew Street'
        }
      });
    }

    constructor(private fb: FormBuilder, private userService: UserService) { };


    ngOnInit() {

    }
}
