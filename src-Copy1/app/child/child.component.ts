import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  @Output() DataInput= new EventEmitter <string>()

  public SendData(data:string)
  {
    this.DataInput.emit(data)
  }

}
