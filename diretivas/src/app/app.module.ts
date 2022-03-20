import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgifComponent } from './estruturais/ngif/ngif.component';
import { NgforComponent } from './estruturais/ngfor/ngfor.component';
import { NgswitchComponent } from './estruturais/ngswitch/ngswitch.component';
import { NgclassComponent } from './atributos/ngclass/ngclass.component';
import { NgstyleComponent } from './atributos/ngstyle/ngstyle.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    NgclassComponent,
    NgstyleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
