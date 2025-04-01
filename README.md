### INTRODUCCION
---
- Reto tecnico resuelto en node js, el proposito del reto es generar reportes de transacciones basados en datos otorgados
por un archivo `.CSV` 

### EJECUCION
---
- Clonar el repositorio `https://github.com/Jonaiker-dev/retotecnico-cobol`
- Ejecutar `npm install` para crear la carpeta node_modules
- De ser necesario instalar con npm la libreria ***csv-parser*** usando `npm install csv-parser`
- Ejecutar `node src/index.js FILE=ruta-archivo.csv` de no ingresar el parametro FILE , se usara por defecto los datos del csv contenido en el repositorio 

### SOLUCION
---
- Usando la libreria CSV-PARSER y el File System de node, pude leer los datos del archivo CSV y convertirlo en un Array de datos para poder trabajarlo
- Segun la documentacion de CSV-PARSER le pase la ruta del archivo CSV, una vez leido guarde todo en un Array llamado `transacciones` donde guarde toda la data
- en otro archivo cree las funciones para calcular el Balance Final, Mayor Monto y el Conteo , pidiendo en todas el array `transacciones` por parametro
- a traves de la consola mostre los datos que retornaba cada funcion

### ESTRUCTURA
---
- `data.csv`: archivo que se ejecuta por default si no ingresas la URL de otro archivo CSV
- `functions.js`: archivo javascript que contiene las funciones para hacer los calculos pedidos en el reto
- `index.js`: archivo principal donde se leera el archivo CSV y se mostrara el Reporte de Transacciones
