import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

     buttonText:string = "Click Here";
     location = ["pune","dun","delhi"];
     
    clickFun(event:any):void{
      alert("Button cliked")
     }
}
