import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})

export class TooltipComponent implements OnInit {

  @Input() tooltip: string
  toggleTooltip: boolean = false

  constructor() { }

  ngOnInit() {
    // console.log(tooltip)
  }

  toggle() {
    this.toggleTooltip = !this.toggleTooltip
    console.log(this.toggleTooltip)
  }

}
