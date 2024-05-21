
Este codigo determina si un año dado es bisiesto o no. Con la funcion isLeap
Un año es bisiesto si es divisible por 4 pero no por 100, a menos que también sea divisible por 400.

@param {number} year - El año a verificar.
@returns {boolean}  true si el año es bisiesto, sfalse` si no lo es.

El código utiliza una expresión que verifica si el año es divisible por 4 (year % 4 === 0). Si el año es divisible por 4, entonces se evalúa la segunda parte de la expresión. Esta parte verifica si el año no es divisible por 100 (year % 100 !== 0) o si es divisible por 400 (year % 400 === 0). Si cualquiera de estas dos condiciones se cumple, entonces el año es considerado bisiesto y la función devuelve true. Si ninguna de las condiciones se cumple, la función devuelve false, lo que indica que el año no es bisiest
 
 [Enlace video](https://youtu.be/XkeXAFViouM)