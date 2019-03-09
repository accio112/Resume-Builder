import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResumeComponent} from "./user/resume/resume.component";
import { TemplateComponent} from "./user/template/template.component";
import { Template2Component} from "./user/template2/template2.component";
import { SelectTemplateComponent } from "./select-template/select-template.component"
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate:[AuthGuard]
    },
    {
        path: 'resume', component: ResumeComponent
    },
    {
        path: 'template', component: TemplateComponent
    },
    {
        path: 'select-template', component: SelectTemplateComponent
    },
    {
        path: 'template2', component: Template2Component
    },

    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
