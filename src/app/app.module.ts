import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { NoneComponent } from './none/none.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatedComponent,
    NoneComponent,
    ShadowDomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
