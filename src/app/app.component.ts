import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myname: string = 'Mayank';
  surname: string = '';

  addSurname(value: string){
    this.surname = value;
  }
  
}
