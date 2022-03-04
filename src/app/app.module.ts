import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import {FormsModule} from "@angular/forms";
import { StructureDirectivesComponent } from './components/structure-directives/structure-directives.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { NgTemplatesComponent } from './components/ng-templates/ng-templates.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StructureDirectivesComponent,
    InputOutputComponent,
    TwoWayBindingComponent,
    NgTemplatesComponent
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
