import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  filterData2: any;
  dataFetched: boolean;
  filterData: any;
  hasData: any;



  constructor(private containsData: DataService, private router:Router) {}

  ngOnInit() {
    this.filterData= this.containsData.getData().subscribe(data =>{
      console.log("data  ", data);
      
      this.hasData = data
      console.log(this.hasData);
    });
    console.log("hi");

  }

  
  onSelect(arr) {

    this.filterData2 = this.router.navigate(['/app-secondpage', arr.id]);


    this.hasData.map(element => {
      if (element) {
        if (element.id == this.filterData2) {
          this.filterData2 = element
        }

      }
      console.log(this.filterData2);
    });
    this.dataFetched = true;
  }


}
