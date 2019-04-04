import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  cardId: number;
  hasData: any;
  cardObject: any;
  dataFetched: boolean;
  filterData: any;

  constructor(private containsData: DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('description'));
    let result = null;
    this.cardId = id;

    this.filterData = this.containsData.getData().subscribe(data => {


      this.hasData = data.News;
      console.log(this.hasData);
      this.hasData.map(element => {
        if (element) {
          if (element.id == this.cardId) {
            this.cardObject = element
          }

        }
        console.log(this.cardObject)
      });
      this.dataFetched = true;
    });


  }

  // display(param)
  }


