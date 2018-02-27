import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000); //emit value in sequence every 1 second (1000ms)
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const myObservable = Observable.create((observer: Observer<string>) => { //the type of data it will emmit
      setTimeout(() => {
        observer.next('first package'); //emits a normal data package
      }, 2000);
      setTimeout(() => {
        observer.next('second package'); //emits a normal data package
      }, 4000);
      setTimeout(() => {
        observer.error('this does not work'); //emits a normal data package. the flow ends when it finds an error or complete
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });
  
    myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

}
