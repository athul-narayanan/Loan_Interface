import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'load-feature',
  templateUrl: './load-feature.component.html',
  styleUrls: ['./load-feature.component.scss']
})
export class LoadFeatureComponent implements OnInit {
  @Input() loanFeature : any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.loanFeature)
  }

}
