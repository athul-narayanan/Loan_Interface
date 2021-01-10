import { Component, OnInit } from '@angular/core';
import { OpacDotStyle, TopDotStyle } from '../constants';
import { LoanFeaturesService } from '../loan-features.service';

@Component({
  selector: 'avail-loan',
  templateUrl: './avail-loan.component.html',
  styleUrls: ['./avail-loan.component.scss']
})
export class AvailLoanComponent implements OnInit {
  loanFeatureList$;
  topDotStyle = TopDotStyle;
  opacDotStyle= OpacDotStyle;
  constructor(private loanFeatureService:LoanFeaturesService) { 
    this.loanFeatureList$ = this.loanFeatureService.loanFeatures$
    this.loanFeatureList$.subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
