

function BalanceFinal(data){
    let montoDebito=0
    let montoCredito=0
    //mapearemos el arreglo para sumar los montons segun su tipo
    data.map(({tipo,monto})=>{
        if(tipo==="Crédito"){
            // si es tipo credito sumaremos a montoCredito, la cantidad que hay en la variable monto
            montoCredito+=monto
        }else if(tipo==="Débito"){
            // si es tipo credito sumaremos a montoDebito, la cantidad que hay en la variable monto
            montoDebito+=monto
        }
    })
    //Retornamos la resta del creduti y debito
    return  montoCredito - montoDebito
}

function MayorTransaccion(data){
    let montomayor=0
    let idmayor=0
    data.map(({id,monto})=>{
        if(monto>montomayor){
            //Si el monto es mayor a montomayor, ahora monto sera el nuevo valor de montomayor e igual con el ID
            montomayor=monto
            idmayor=id
        }
    }) 
    
    return `ID ${idmayor} - ${montomayor}`
}

function ConteoTransacciones(data){
    let countCredito=0
    let countDebito=0
    
    data.map(({tipo})=>{
        if(tipo==="Crédito"){
            // Si es tipo credito, sumamos 1 al contador
            countCredito++
        }else if(tipo==="Débito"){
            // Si es tipo debito, sumamos 1 al contador
            countDebito++
        }
    })

    return `Crédito: ${countCredito} - Débito: ${countDebito}`
}

module.exports={
    BalanceFinal,
    MayorTransaccion,
    ConteoTransacciones
}