import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';
import { EmpleadoService } from '../service/empleado.service';


@Component({
    selector: 'app-ecrear',
    templateUrl: './ecrear.component.html',
    providers: [EmpleadoService]

})

export class EcrearComponent {
    title = "Agregar";
    @Output('msj') msj = new EventEmitter<boolean>();

    public producto: Producto;

    public error: string = "";
    public success: string = "";
    public edit: boolean = false;

    constructor(
        private _router: Router,
        private empleadoService: EmpleadoService
    ) {
        this.producto = new Producto('', '', '', '');
    }

    ngOnInit(): void {
    }

    //CREAR
    onSubmit(form: NgForm) {
        this.empleadoService.agregarProducto(this.producto).subscribe(
            resp => {
                this.success = "Producto agregado!";
                this.error = "";
                console.log(resp.producto)
                this.cerrar();
            }, err => {
                this.error = err.error.message;
                this.success = "";
                console.log(<any>err);

            })
    }

    cerrar() {
        if (this.success !== '') {
            alert(this.success)
            this.msj.emit(false);

        } else {
            this.msj.emit(false);

        }
    }

}
