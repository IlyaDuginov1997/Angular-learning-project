import {Component, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'app-host-directives',
  templateUrl: './host-directives.component.html',
  styleUrls: ['./host-directives.component.css']
})
export class HostDirectivesComponent {

  @HostBinding('class')
  hostClass = 'hidden'

  private skipClick = false

  @HostListener('click', ['$event'])
  hostClick(event: Event) {
    console.log('click', event)
    event.stopPropagation()
  }

  show() {
    this.hostClass = ''
    this.skipClick = true
  }

  @HostListener('window:click', ['$event'])
  hide() {
    if (this.skipClick) {
      this.skipClick = false
      return
    }
    this.hostClass = 'hidden'
    console.log('window click', event)
  }
}
