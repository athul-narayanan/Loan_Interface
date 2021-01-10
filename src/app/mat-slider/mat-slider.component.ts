import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'price-slider',
  templateUrl: './mat-slider.component.html',
  styleUrls: ['./mat-slider.component.scss']
})
export class MatSliderComponent implements OnInit {
  @Input() range;
  @Input() label;
  selectedValue;
  constructor() { 

  }

  ngOnInit(): void {
    this.selectedValue = '₹' + this.range['min'];
  }

  onInputChange(event){
    this.selectedValue = '₹' + event.value;
  }

}
