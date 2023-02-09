import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import { ActuacionAddComponent } from './actuacion-add/actuacion-add.component';
import {NgxSpinnerService,Spinner} from 'ngx-spinner'





@Component({
  selector: 'app-crear-expediente',
  templateUrl: './crear-expediente.component.html',
  styleUrls: ['./crear-expediente.component.scss']
})
export class CrearExpedienteComponent implements OnInit  {

  bsValue = new Date();
  exValue: string = '1/2023-PES-CG';
  values: string[];
  public denunciante = [
    // {display: 'Pizza', value: 1},
    // {display: 'Pasta', value: 2},
    // {display: 'Parmesan', value: 3},
  ];
  public denunciada =[];
  hello=true;
  // itemList=["Primero","Segundo"];
  itemList=[
  {
    fecha:"20-01-2023",
    sintesis:"Este es una prueba de sisntesis"
  },
  {
    fecha:"21-01-2023",
    sintesis:"Este es la segunda prueba de sisntesis"
  }  
  ];
  bsModalRef:BsModalRef;

  // title='modal2';
  // editProfileForm:FormGroup;
  // userList = [
  //   {
  //    nombre: "Joselo",
  //    apellido: "Moreno"
  //   },
  //   {
  //     nombre: "Paco",
  //     apellido: "Acevez"
  //    },
  //    {
  //     nombre: "Armando",
  //     apellido: "Montoya"
  //    }];

  

  constructor(private modalService: BsModalService, private spinner: NgxSpinnerService) { 
    
    // this.minDate.setDate(this.minDate.getDate() - 1);
    // this.maxDate.setDate(this.maxDate.getDate() + 7);
    // this.bsRangeValue = [this.bsValue, this.maxDate];
    TagInputModule.withDefaults({
      tagInput:{
        placeholder:'Enter nuevo',
        secondaryPlaceholder:'Agrega parte',
        
      }
    })
  }

  ngOnInit(): void {
  }

  openModalWithComponent(contenido) {
    const initialState = {
      list: [
        {"tag":'Count',"value":this.itemList.length}
      ]
    };
    this.bsModalRef = this.modalService.show(ActuacionAddComponent,{initialState});
    this.bsModalRef.content.closeBtnName = 'Close'; 
    this.bsModalRef.content.event.subscribe(res => {
      this.itemList.push(res.data);
    }
    );
  }
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 5 seconds */
         this.spinner.hide();
    }, 3000);
    // this.hello=false;
  }

}
