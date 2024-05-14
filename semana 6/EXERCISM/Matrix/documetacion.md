 `Matrix` permite crear una matriz numérica a partir de un string de texto y proporciona métodos para acceder a las filas y columnas de la matriz.
La clase `Matrix` tiene dos propiedades `rows` y `columns`, ambas son matrices de números (`number[][]`). La propiedad `rows` contiene la representación de la matriz como una matriz de filas, mientras que la propiedad `columns` contiene la representación de la matriz como una matriz de columnas.

El constructor de la clase realiza dos pasos principales:

1. Convierte el texto en una matriz de filas (`rows`): Divide el texto en líneas usando `split('\n')`, luego para cada línea divide la línea en elementos usando `split(/\s+/)` que divide por cualquier cantidad de espacios en blanco, y finalmente convierte cada elemento en un número usando `map(Number)`.
2. Calcula la matriz de columnas (`columns`): Utiliza la matriz de filas (`this.rows`) para transponer la matriz, es decir, intercambia filas por columnas. Para hacer esto, utiliza `this.rows[0].map((_, i) => ...)` para iterar sobre los índices de columna y luego para cada índice de columna `i`, utiliza `this.rows.map((row) => row[i])` para obtener la columna `i` de cada fila y así formar una nueva columna.

[video](https://youtu.be/g7rhzpw5M98)