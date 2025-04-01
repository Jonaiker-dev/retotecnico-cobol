const fs=require('node:fs')
const csv=require('csv-parser')
const {BalanceFinal,MayorTransaccion,ConteoTransacciones}=require('./functions')
const transacciones=[]
//por la consola ingresamos la url del archivo csv a analizar, sino ingresamos una ruta por defecto
const file =process.env.FILE??'./src/data.csv'

fs.createReadStream(file)
  .pipe(csv())
  .on('data', (row) => {
    transacciones.push({
      id: parseInt(row.id),
      tipo: row.tipo,
      monto: parseFloat(row.monto),
    });
  })
  .on('end',()=>{
    
    console.log(`
      Reporte de Transaciones
      ----------------------------------------
      Balance Final: ${BalanceFinal(transacciones)}
      Transacción de Mayor Monto: ${MayorTransaccion(transacciones)}
      Conteo de Transacciones: ${ConteoTransacciones(transacciones)}
    `); 
    
  })

 
