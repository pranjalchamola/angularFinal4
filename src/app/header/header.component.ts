import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login_check:boolean = true;
  categories: any;
  message: any;
  hasData: any;
  filterData: any;
  @Output() headings: EventEmitter<any>= new EventEmitter();
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
    // if(localStorage.getItem('isLoggedIn')== "true")
    //  { 
    //  this.login_check=false;
    //  }
    //  else{
    //    this.login_check = true;
    //  }
    setInterval(()=>{
      if(localStorage.getItem('isLoggedIn') == "true")
     { 
     this.login_check=false;
     }
     else{
       this.login_check = true;
     }
    },100)
  }
  logout_session(){

    localStorage.setItem('isLoggedIn', "false");
    localStorage.setItem('token',"");
    this.login_check=true;
    
  }
  onClick(id){
    console.log(id);
    this.containsData.CategoryPublish(id);
    
    }
}
