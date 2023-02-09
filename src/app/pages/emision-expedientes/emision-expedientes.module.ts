import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { EmisionExpedientesRoutingModule } from './emision-expedientes-routing.module';
import { CrearExpedienteComponent } from './crear-expediente/crear-expediente.component';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { TagInputModule } from 'ngx-chips';
import { ActuacionAddComponent } from './crear-expediente/actuacion-add/actuacion-add.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule} from 'ngx-spinner';





@NgModule({
  declarations: [
    CrearExpedienteComponent,
    ActuacionAddComponent,
  ],
  imports: [
    CommonModule,
    // RouterModule.forRoot([
    //   {path:'item', component:CrearExpedienteComponent },
    //   {path:'additem', component:ActuacionAddComponent}
    // ]),
    RouterModule.forChild(EmisionExpedientesRoutingModule),
    // EmisionExpedientesRoutingModule
    BsDatepickerModule.forRoot(),
    FormsModule,
    TagInputModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    NgxSpinnerModule
    // NgxSpinnerModule.forRoot({type:'ball-scale-multiple'})
  ],
  exports:[
    NgxSpinnerModule
  ],
  providers: [],
  entryComponents:[ActuacionAddComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class EmisionExpedientesModule { }
