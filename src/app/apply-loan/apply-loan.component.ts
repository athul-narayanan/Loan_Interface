import { Component, OnInit } from '@angular/core';
import { BottomDotStyle } from '../constants';

@Component({
  selector: 'apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit {

  bottomDotStyle = BottomDotStyle;
  constructor() { }

  ngOnInit(): void {
  }

}
