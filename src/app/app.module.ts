import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NestorComponent } from './nestor/nestor.component';
import { ButtressComponent } from './buttress/buttress.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'nestor', component: NestorComponent },
  { path: 'buttress', component: ButtressComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ResumeComponent,
    HomeComponent,
    FooterComponent,
    NestorComponent,
    ButtressComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
