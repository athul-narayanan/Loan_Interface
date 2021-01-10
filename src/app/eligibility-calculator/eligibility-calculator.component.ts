import { Component, OnInit } from '@angular/core';

import { MonthlyIncomeRange, MonthlyExpenseRange , tenureList} from './../constants'

@Component({
  selector: 'eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.scss']
})
export class EligibilityCalculatorComponent implements OnInit {
  monthlyIncomeRange = MonthlyIncomeRange;
  monthlyExpenseRange = MonthlyExpenseRange;
  tenureList = tenureList;
  selectedTenure ;
  isPreviousLoan : boolean = false
  constructor() {
    this.selectedTenure = this.tenureList[0].value;
   }

  ngOnInit(): void {
  }

}
