export class Usuario {
    constructor(
        public user: string,
        public password: string,
        public rol:string,

        // public id: string,
        public nombre: string,
        public apellido: string,
        public domicilio: string,
        public telefono: string,
        public correo: string,

    ) { }
}