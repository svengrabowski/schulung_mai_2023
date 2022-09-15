import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[todoInputLimit]'
})
export class InputLimitDirective {

  @Input() warning: number = 0;
  @Input() descriptionLimit: number = 0;

  constructor(private el: ElementRef) {
  }

  @HostListener('input')
  public onInput(event: InputEvent): void {
    const currentInputValue = this.el.nativeElement.value;
    let backgroundColor = 'green';

    if (currentInputValue.length >= this.descriptionLimit) {
      this.el.nativeElement.value = currentInputValue.substring(0, this.descriptionLimit);
      backgroundColor = '#f8d7da';
    } else if (currentInputValue.length >= this.warning) {
      backgroundColor = '#fff3cd';
    } else {
      backgroundColor = '#fff';
    }

    this.el.nativeElement.style.backgroundColor = backgroundColor;
  }
}
