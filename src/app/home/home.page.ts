import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome : string = "sz";
  valor : number ;
  valor2 : number  ;

  clicar() :void {
    var total = Number(this.valor)+Number(this.valor2);
    var total2 = total%2;
    if (total2==0){
        alert("é par");
    }
    else {
        alert("nam é par");}

    }
}
