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
    { id: "btn1", text: "first tooltip", isVisible: false },
    { id: "btn2", text: "second tooltip", isVisible: false }
  ]
  
  title = 'myapp';

  toggleOthers() {
    
  }
}
