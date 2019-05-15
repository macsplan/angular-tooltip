import { Component, OnInit, Input } from '@angular/core';
import { Tooltip } from './tooltip'
import { isRootView } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  selectedTooltip: string

  tooltips: Tooltip[] = [
    { id: "btn1", text: "1", visible: false },
    { id: "btn2", text: "2", visible: false }
  ]
  
  title = 'myapp';

  toggle(e, id) {
    this.tooltips.map((item, index) => {
      if (item.id === id) {
        item.visible = true
      } else {
        item.visible = false
      }
    })    
  }
}
