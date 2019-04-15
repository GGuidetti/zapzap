import { Component } from '@angular/core';

@Component({
  selector: 'component-slide',
  template: `
    <ion-slides pager="true" [options]="slideOpts">
      <ion-slide>
        <ion-img src="https://media1.tenor.com/images/afb2192a67186f06d09f49567a64a417/tenor.gif?itemid=12970659"></ion-img>
      </ion-slide>
      <ion-slide>
      <ion-img src="https://www.gazetaesportiva.com/wp-content/uploads/imagem/2018/06/03/c%C3%A1ssio-x-liziero_djalma.jpg"></ion-img>

      </ion-slide>
      <ion-slide>
        <h1>Slide 3</h1>
      </ion-slide>
    </ion-slides>
  `
})
export class ComponentSlide {
  slideOpts = {
    effect: 'flip'
  };
  constructor() {}
}
