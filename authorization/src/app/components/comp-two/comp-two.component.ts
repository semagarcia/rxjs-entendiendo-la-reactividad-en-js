import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
