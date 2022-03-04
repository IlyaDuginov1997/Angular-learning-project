import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import {FormsModule} from "@angular/forms";
import { StructureDirectivesComponent } from './components/structure-directives/structure-directives.component';
import { InputOutputComponent } from './components/input-output/input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StructureDirectivesComponent,
    InputOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
