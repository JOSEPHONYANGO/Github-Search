import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GitRoutingModule } from './git-routing.module';
import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitSearchResultsComponent } from './git-search-results/git-search-results.component';
import { DateFormatPipe } from './date-format.pipe';
import { SearchGithubService } from './search-github.service';
import { DaysCountPipe } from './days-count.pipe'

@NgModule({
  declarations: [
    AppComponent,       
    GitFormComponent,
    GitSearchResultsComponent,
    DateFormatPipe,
    DaysCountPipe
  ],
  imports: [      
    BrowserModule,
    HttpClientModule,
    FormsModule,
    GitRoutingModule, 
    
  ],
  providers: [SearchGithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
