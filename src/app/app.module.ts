import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import{contactDetailComponent} from './contact-detail.component';


@NgModule({
  imports:      [ BrowserModule,
                   FormsModule
              ],
  declarations: [ AppComponent,
                  contactDetailComponent
                  
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
