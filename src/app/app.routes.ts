import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/authLayout/auth-layout/auth-layout.component';
import { PagesLayoutComponent } from './layout/pagesLayout/pages-layout/pages-layout.component';
import { HomeComponent } from './AllComponents/pagescomponents/home/home.component';
import { AboutusComponent } from './AllComponents/pagescomponents/aboutus/aboutus.component';
import { AtrchComponent } from './AllComponents/pagescomponents/atrch/atrch.component';
import { BooknowComponent } from './AllComponents/pagescomponents/booknow/booknow.component';
import { CallnowComponent } from './AllComponents/pagescomponents/callnow/callnow.component';
import { ContactusComponent } from './AllComponents/pagescomponents/contactus/contactus.component';
import { DoctorsComponent } from './AllComponents/pagescomponents/doctors/doctors.component';
import { FeedbackComponent } from './AllComponents/pagescomponents/feedback/feedback.component';
import { MediaComponent } from './AllComponents/pagescomponents/media/media.component';
import { OffersComponent } from './AllComponents/pagescomponents/offers/offers.component';
import { QuesAndAnswerComponent } from './AllComponents/pagescomponents/ques-and-answer/ques-and-answer.component';
import { NotfoundComponent } from './AllComponents/additionsComponents/notfound/notfound.component';
import { LoginComponent } from './AllComponents/authComponents/login/login.component';
import { RegisterComponent } from './AllComponents/authComponents/register/register.component';

export const routes: Routes = [

    {
        path: '', component: AuthLayoutComponent, children: [
            { path: '', redirectTo: "login", pathMatch: "full" },
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent }
        ]
    },
    {
        path: '', component: PagesLayoutComponent, children: [
            { path: '', redirectTo: "home", pathMatch: "full" },
            { path: 'home', component: HomeComponent },
            { path: 'artch', component: AtrchComponent },
            { path: 'media', component: MediaComponent },
            { path: 'offers', component: OffersComponent },
            { path: 'booknow', component: BooknowComponent },
            { path: 'callnow', component: CallnowComponent },
            { path: 'doctors', component: DoctorsComponent },
            { path: 'aboutus', component: AboutusComponent },
            { path: 'feedback', component: FeedbackComponent },
            { path: 'contactus', component: ContactusComponent },
            { path: 'quesAndAnswer', component: QuesAndAnswerComponent },
        ]
    },

    { path: "**", component: NotfoundComponent }
];
