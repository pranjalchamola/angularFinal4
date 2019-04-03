import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import{ DataService} from '../app/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularFinal4';
  public headings: any; 
    public containsData:DataService;
  filterdata: any;
 

  // receiveId(value:any) {
  //   console.log(value);
  //    this.headings=value;
  //    this.containsData.filterId(value);
  //   }

  ngOnInit(){

  }



}
