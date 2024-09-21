import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor (private routername:Router){

  }

  gotousers(){
    this.routername.navigate(["/"])
  }

}
