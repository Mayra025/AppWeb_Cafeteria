import { Component, ElementRef, OnInit,Renderer2,ViewChild } from '@angular/core';
import { CafeteriaService} from 'src/app/service/cafeteria.services'; 
import { Contacto } from 'src/app/models/contacto'; 
import { Global } from '../../app/service/global';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [CafeteriaService]
})
export class ContactoComponent implements OnInit {
  public titulo: string;
  public contacto: Contacto;
  public contactoGuardado: Contacto;
  public url: string;
  public status: string;

  constructor(
    private _cafeteriaService: CafeteriaService
  ) {
    this.titulo = "Contactanos";
    this.url = Global.url;
    this.contacto = new Contacto("", "", "","", "", "");
    this.contactoGuardado =new Contacto("", "", "","","","");
    this.status = '';

  }

  ngOnInit(): void {

  }

  guardarContacto(form: NgForm) {
    this._cafeteriaService.guardarContacto(this.contacto).subscribe(
      response => {
        if (response.contacto) {
                this.contactoGuardado = response;
                this.status = 'success';
                console.log(response.contacto._id);
                form.reset();
              
          } else {
            this.status = 'failed';
          }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
