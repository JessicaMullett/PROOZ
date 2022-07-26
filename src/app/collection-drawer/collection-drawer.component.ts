import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController, Platform } from '@ionic/angular';

@Component({
  selector: 'collection-drawer',
  templateUrl: './collection-drawer.component.html',
  styleUrls: ['./collection-drawer.component.scss'],
})
export class CollectionDrawerComponent implements OnInit {

  @Input('options') options: any;
  handleHeight: number = 90;
  bounceBack: boolean = true;
  thresholdTop: number = 150;
  thresholdBottom: number = 200;

  constructor(
    public element: ElementRef, 
    public renderer: Renderer2, 
    public domCtrl: DomController, 
    public platform: Platform
    ){
  }

  ngAfterViewInit() {
    if(this.options.handleHeight){
      this.handleHeight = this.options.handleHeight;
    }
    if(this.options.bounceBack){
      this.bounceBack = this.options.bounceBack;
    }
    if(this.options.thresholdFromBottom){
      this.thresholdBottom = this.options.thresholdFromBottom;
    }
    if(this.options.thresholdTop){
      this.thresholdTop = this.options.thresholdTop;
    }

    this.renderer.setStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
    hammer.on('pan', (ev) => {
      this.handlePan(ev);
      // console.log('pan')
    });
  }

  handlePan(ev){
    let newTop = ev.center.y;
    let bounceToBottom = false;
    let bounceToTop = false;
    if (ev.isFinal != true) {
      // console.log("Pan has occurred");
      this.renderer.setStyle(this.element.nativeElement, 'top', newTop + 'px');
    }
    if(this.bounceBack && ev.isFinal){
      let topDiff = newTop - this.thresholdTop;
      let bottomDiff = (this.platform.height() - this.thresholdBottom) - newTop;
      topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;
      // console.log('1')
    }
    if((newTop < this.thresholdTop && ev.additionalEvent === "panUp") || bounceToTop){
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setStyle(this.element.nativeElement, 'top', '150px');
        // console.log('2')
      });
    } else if(((this.platform.height() - newTop) < this.thresholdBottom && ev.additionalEvent === "panDown") || bounceToBottom){
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
        // console.log('3')
      });
    } else {
      this.renderer.setStyle(this.element.nativeElement, 'transition', 'none');
      if(newTop > 0 && newTop < (this.platform.height() - this.handleHeight)) {
        if(ev.additionalEvent === "panUp" || ev.additionalEvent === "panDown"){
          this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, 'top', newTop + 'px');
          });
        }
      }
    }
  }

  ngOnInit() {}

}
