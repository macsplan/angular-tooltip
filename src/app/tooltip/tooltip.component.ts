import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})

export class TooltipComponent implements OnInit {

  @Input() text: string
  toggleTooltip: boolean = false
  @Input() buttonIdx: string
  
  constructor() { }

  ngOnInit() {
    // console.log(tooltip)
  }

  toggle(e, idx) {
    this.toggleTooltip = !this.toggleTooltip
    // console.log(this.toggleTooltip)
  }

}
