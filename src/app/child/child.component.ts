import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  message:string ="";

 @Output() play = new EventEmitter();
 @Output() pause = new EventEmitter();


 onPlay(){
  this.message = "Video resumed"
   this.play.emit(this.message)
 }
 onPause(){
  this.message = "Video paused"
   this.pause.emit(this.message)
 }


}
