import { Directive, OnInit, Input, Renderer2, HostListener } from '@angular/core';
import { DomController } from '@ionic/angular';
@Directive({
  selector: '[appFadeHeader]'
})
export class FadeHeaderDirective implements OnInit {

  @Input('appFadeHeader') toolbar: any;

  constructor(
    private domCtrl: DomController
  ) { }

  ngOnInit() {
    console.log('masukkkk iniiii')
    this.toolbar = this.toolbar.el;
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    let scrollTop = $event.detail.scrollTop;
    if (scrollTop >= 255) {
      scrollTop = 255;
    }

    const hexDist = scrollTop.toString(16);
    console.log('masukkkk',hexDist)
    this.domCtrl.write(() => {
      this.toolbar.style.setProperty('--background', `#f4f5f8${hexDist}`)
    })
  }


}
