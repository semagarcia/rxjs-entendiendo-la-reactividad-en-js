import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
