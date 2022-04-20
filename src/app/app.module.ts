import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GhUserComponent } from './gh-user/gh-user.component';
import { FormComponent } from './form/form.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitSearchResultsComponent } from './git-search-results/git-search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GhUserComponent,
    FormComponent,
    GitFormComponent,
    GitSearchResultsComponent
  ],
  imports: [      
    BrowserModule,
    HttpClientModule, 
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
