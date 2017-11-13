import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
