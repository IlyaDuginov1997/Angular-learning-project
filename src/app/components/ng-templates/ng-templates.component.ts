import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-ng-templates',
  templateUrl: './ng-templates.component.html',
  styleUrls: ['./ng-templates.component.css']
})
export class NgTemplatesComponent {

  @Input()
  template?: TemplateRef<{$implicit: number}>

}
