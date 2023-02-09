import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-actuacion-add',
  templateUrl: './actuacion-add.component.html',
  styleUrls: ['./actuacion-add.component.scss']
})
export class ActuacionAddComponent implements OnInit {

  itemform;
  numberOfItems = 0;
  sValue;
  list: any[] = [];
  public event: EventEmitter<any> = new EventEmitter();
  

  constructor(private formBuilder: FormBuilder, public bsModalRef: BsModalRef) {
    
   }

  ngOnInit(): void {
    this.itemform = this.formBuilder.group({
      sValue: ""
      })
      console.log(this.list)
  }

  saveToList(form) {
    if(form.value){
      this.triggerEvent(form.value.sValue);
      this.triggerEvent(form.value.descripcionsin);
      this.bsModalRef.hide();
    }
 }
 closeModal(){
  this.bsModalRef.hide();
 }
  triggerEvent(item: string) {
    this.event.emit({ data: item , res:200  });
  }

}
