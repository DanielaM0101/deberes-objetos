Verifica si una oración dada es un pangrama, es decir, si contiene al menos una vez cada una de las letras del alfabeto inglés. Aquí está cómo funciona el código:

1. La función `isPangram` toma una cadena `sentence` como argumento y devuelve un valor booleano.
   
2. En la línea 2, la cadena `sentence` se convierte a minúsculas utilizando el método `toLowerCase()`. Esto se hace para asegurarse de que la función sea insensible a mayúsculas y minúsculas al verificar si una letra está presente en la oración.

3. En la línea 3, se crea un array que contiene todas las letras del alfabeto inglés en minúsculas utilizando la sintaxis de spread operator `[..."abcdefghijklmnopqrstuvwxyz"]`. Luego, se utiliza el método `every` en este array para verificar si todas las letras del alfabeto están presentes en la oración. La función de callback `(c => sentence.includes(c))` verifica si cada letra `c` está presente en la cadena `sentence` utilizando el método `includes()`.

4. La función `every` devuelve `true` si la condición se cumple para todos los elementos del array (es decir, si todas las letras del alfabeto están presentes en la oración) y `false` en caso contrario. Este valor booleano se devuelve como resultado de la función `isPangram`.

[video](https://youtu.be/-2xZIsvr7LQ)