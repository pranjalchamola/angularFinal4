import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  hasData: any;
  filternews: any[];
  filterData2: any;
  map(arg0: (element: any) => void): any {
    throw new Error("Method not implemented.");
  }
  categories: any;
  data: any;
  currentMessage: any;



  public category_subject = new Subject<any>();
  // public category_subject_event = this.category_subject.asObservable();
  


  constructor(
    private http: HttpClient,
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  getData(): Observable<any> {

    return this.http.get("https://angularfinal-21.firebaseio.com/.json");

  }
  getnews(){
    this.getData().subscribe(data => {
      console.log("data  ", data);

      this.hasData = data
      console.log(this.hasData);
    });
  }


  

  public CategoryPublish(id) {

    this.filternews = [];
    this.getData().subscribe(data => {
      // console.log("data  ", data);
      this.hasData = data
      // console.log("from body", );
      // tslint:disable-next-line: align
      this.filterData2 = this.hasData['News'].map((news) => {
        
        if (news.catid == id) {
          this.filternews.push(news)
        }
        // console.log("from map", this.filternews);
        
      });
      this.category_subject.next(this.filternews); 
    });
    
     
  }




  /**
   * update token in firebase database
   * 
   * @param userId userId as a key 
   * @param token token as a value
   */
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userId] = token
        this.angularFireDB.object('fcmTokens/').update(data)
      })
  }

  /**
   * request permission for notification from firebase cloud messaging
   * 
   * @param userId userId
   */
  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
        this.updateToken(userId, token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
 
}
