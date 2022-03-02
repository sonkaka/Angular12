import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('appHighLight') appHighlight = 'blue';

  constructor(private el: ElementRef) { 
    console.log('HighLightDirective', this.appHighlight);
    el.nativeElement.style.color = this.appHighlight;
  }

  ngOnInit(): void{
    console.log('HighLightDirective_ngOnInit', this.appHighlight);
    this.el.nativeElement.style.color = this.appHighlight;
  }
}
