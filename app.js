//OK 10/8/21


let autos= require("./autos.js")
const concesionaria = {
 autos:autos ,

 buscarAuto:function(patente){
 let Autoencontrado;
 this.autos.forEach(auto => {console.log(" uso forEach", auto);
 if (auto.patente==patente){Autoencontrado=auto}})
 return (Autoencontrado===undefined)? null : Autoencontrado ;},

 venderAuto:function(patente){
 let Autoencontrado=this.buscarAuto(patente)
 if (Autoencontrado){Autoencontrado.vendido=true}},

 autosParaLaVenta:function(){
 return this.autos.filter(auto => auto.vendido===false)
 },

 autosNuevos:function(){
 const autossinvender=this.autosParaLaVenta();
 return autossinvender.filter(auto => auto.km < 100)
 },

 listaDeVentas:function(){
     let autosVendidos=autos.filter(function(auto){
         if (auto.vendido==true){
             return true}
             else {return false}
     })
     return autosVendidos.map(function(auto){
         return auto.precio
     })
 },

 totalDeVentas:function(){
     let listaDeVentas=this.listaDeVentas()
     if (listaDeVentas.length==0){
         return 0
     }
     return listaDeVentas.reduce(function(cumulador, precio){
         return acumulador + precio
     })
 },

 puedeComprar:function(auto,persona){
    let precioDeCuota = (auto.precio/auto.cuotas);
    return (persona.capacidadDePagoEnCuotas>precioDeCuota && persona.capacidadDePagoTotal>auto.precio);
},

autosQuePuedeComprar:function(persona){
    let autosParaVender = this.autosParaLaVenta();
    let autosParaComprar = [];
    for(let i=0; i<autosParaVender.length;i++){
        if(this.puedeComprar(autosParaVender[i],persona)==true){
            autosParaComprar.push(autosParaVender[i]);
        }
    }
    return autosParaComprar
},

 }
