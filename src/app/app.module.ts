import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { InfoService } from './service/info.service';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ InfoService] ,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
