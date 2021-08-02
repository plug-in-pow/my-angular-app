import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  @Input() name: string = '';
  @Output() addSurnameEvent = new EventEmitter<string>();

  addSurnameToEvent(value: string){
    this.addSurnameEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
    this.addSurnameToEvent('Tripathi');
  }

}
