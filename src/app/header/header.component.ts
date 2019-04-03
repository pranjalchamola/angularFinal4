import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: any;
  message: any;
  hasData: any;
  filterData: any;
  // @Output() 'headings': EventEmitter<any> = new EventEmitter();
  catId: void;

  

  constructor(private containsData:DataService) { }

  ngOnInit() {
    const userId = '2222';
    this.containsData.requestPermission(userId);
    this.containsData.receiveMessage();
    this.message = this.containsData.currentMessage;
    this.filterData = this.containsData.getData().subscribe(data =>{
      console.log('data  ', data);
      this.hasData = data
      console.log(this.hasData);
    });
    console.log('hi');
  }

  onClick(id){
    console.log(id);
    this.containsData.CategoryPublish(id);
    
    }
 



}
