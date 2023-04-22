import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public msgParent="";

  @Output() public msgChild= new EventEmitter();

  public SendMsg()
  {
    this.msgChild.emit("Hello From Child Component")
  }



}
