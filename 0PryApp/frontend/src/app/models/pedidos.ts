export class Pedido{
    constructor(
        public _id:string,
        public nombrePropietario: String,
        public nombrePlato:String,
        public cantidad:Number,
        public email: string
    ){}
}