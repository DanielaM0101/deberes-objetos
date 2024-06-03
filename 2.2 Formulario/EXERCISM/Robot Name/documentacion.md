# Documentación  `Robot-Name`

La clase `Robot` se utiliza para crear instancias de robots con nombres únicos generados aleatoriamente. Esta clase incluye métodos para obtener el nombre del robot y restablecer su nombre asegurando que no se repita.


### Pregunta 1: ¿Cuál es el propósito del atributo `nameRobot`?

**Respuesta:** 
El atributo `nameRobot` es una propiedad pública de la clase `Robot` que almacena el nombre único del robot generado aleatoriamente.

```typescript
public nameRobot: string;
```

### Pregunta 2: ¿Qué función cumple el array `allNames`?

**Respuesta:** 
El array `allNames` almacena todos los nombres generados para los robots para asegurar que no se repitan. Es una propiedad pública inicializada como un array vacío.

```typescript
public allNames: string[] = [];
```

### Pregunta 3: ¿Cómo se asigna un nombre al robot cuando se instancia?

**Respuesta:** 
En el constructor de la clase `Robot`, se llama al método estático `releaseNames()` para generar un nombre único, que luego se asigna a `nameRobot`. Este nombre también se agrega al array `allNames`.

```typescript
constructor() {
    this.nameRobot = Robot.releaseNames();
    this.allNames.push(this.nameRobot);
}
```

### Pregunta 4: ¿Qué devuelve el getter `name`?

**Respuesta:** 
El getter `name` devuelve el nombre actual del robot almacenado en `nameRobot`.

```typescript
public get name(): string {
    return this.nameRobot;
}
```

### Pregunta 5: ¿Cómo funciona el método `resetName` para asegurar nombres únicos?

**Respuesta:** 
El método `resetName` genera un nuevo nombre para el robot y verifica que no esté en el array `allNames`. Si el nombre ya existe, se genera un nuevo nombre hasta encontrar uno único. Luego, se agrega el nuevo nombre al array `allNames`.

```typescript
public resetName(): void {
    this.nameRobot = Robot.releaseNames();
    while(this.allNames.indexOf(this.nameRobot) !== -1) {
        this.nameRobot = Robot.releaseNames();
    }
    this.allNames.push(this.nameRobot);
}
```

### Pregunta 6: ¿Cuál es la lógica del método estático `releaseNames`?

**Respuesta:** 
El método `releaseNames` genera un nombre aleatorio compuesto por dos letras mayúsculas seguidas de tres dígitos. Utiliza un array de letras del alfabeto y una función interna `getRandomNum` para obtener números aleatorios dentro de un rango específico.

```typescript
public static releaseNames(): string {
    const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let name: string = '';

    for(let i = 0; i < 2; i++) {
        name += alphabet[getRandomNum(0, 26)];
    }
    for(let i = 0; i < 3; i++) {
        name += getRandomNum(0, 10).toString();
    }
    
    return name;

    function getRandomNum(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
```

### Pregunta 7: ¿Por qué se utiliza una función interna `getRandomNum`?

**Respuesta:** 
La función interna `getRandomNum` se utiliza para generar números aleatorios dentro de un rango específico. Esta función se emplea tanto para seleccionar letras del alfabeto como para generar dígitos numéricos del nombre del robot.

```typescript
function getRandomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}
```

[Video](https://youtu.be/lpGElb4ZgPY)