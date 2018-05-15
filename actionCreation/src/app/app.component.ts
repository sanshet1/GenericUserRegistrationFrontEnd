import { Component, OnInit } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:['input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  title = 'app';

 // login(username,password){
    
  //}
}

