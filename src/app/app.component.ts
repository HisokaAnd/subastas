import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){} 

  mostrar:Boolean = true;
  ngOnInit(): void {
    this.goHome();
  }

  title = 'subastas';
  goCategorias(){
    this.router.navigate(['pages/categorias'])
  }

  goHome(){
    this.router.navigate(['pages/principal'])
  }

  ocultar(){
    if(this.mostrar==true){
      this.mostrar=false;
    }
  }

}
