import { Component, OnInit, OnChanges, OnDestroy, AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1>Demos <small>angular</small></h1>
  <hr>

  <app-ng-style></app-ng-style>
  
  <hr>
  <h1>Ng Style</h1>
  <app-css></app-css>

  <p>
    Hola Mundo desde app.component
  </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit,OnChanges, OnDestroy, AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,DoCheck {

  constructor() {
    
    console.log('constructor')
   }

  ngOnInit() {
    console.log("ngOnInit")
  }

  ngOnChanges(){
    console.log("ngOnChanges")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngDoCheck(){
    console.log("ngDoCheck")
  }

}
