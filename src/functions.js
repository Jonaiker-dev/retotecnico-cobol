

function BalanceFinal(data){
    let montoDebito=0
    let montoCredito=0
    //mapearemos el arreglo para sumar los montons segun su tipo
    data.map(({tipo,monto})=>{
        if(tipo==="Crédito"){
            montoCredito+=monto
        }else if(tipo==="Débito"){
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
            countCredito++
        }else if(tipo==="Débito"){
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