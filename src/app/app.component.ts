import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message!:string ;

 onPlay(){
   this.message
 }
 onPause(){
   this.message

 }


}
