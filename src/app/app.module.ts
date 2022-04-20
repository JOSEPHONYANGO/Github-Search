import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GhUserComponent } from './gh-user/gh-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GhUserComponent
  ],
  imports: [      
    BrowserModule,
    HttpClientModule, 
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
