import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlighColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  @Input() defaultColor: string = 'white';

  @Input('appHighlight') highlighColor: string = 'yellow';

  constructor() {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
