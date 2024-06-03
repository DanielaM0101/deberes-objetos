# Documentación  `GradeSchool`


La clase `GradeSchool` permite gestionar una base de datos de estudiantes y sus grados. Proporciona métodos para obtener un listado completo de los estudiantes ordenados por grados, agregar nuevos estudiantes y obtener los estudiantes de un grado específico.


### Pregunta 1: ¿Cuál es el propósito del atributo `db`?

**Respuesta:**
El atributo `db` es un objeto privado que actúa como la base de datos de la escuela, almacenando pares clave-valor donde la clave es el nombre del estudiante y el valor es su grado.

```typescript
private db: Record<string, number>
```

### Pregunta 2: ¿Qué hace el constructor de la clase `GradeSchool`?

**Respuesta:**
El constructor inicializa el atributo `db` como un objeto vacío.

```typescript
constructor() {
    this.db = {}
}
```

### Pregunta 3: ¿Cómo funciona el método `roster`?

**Respuesta:**
El método `roster` devuelve un objeto donde las claves son los grados y los valores son arrays de nombres de estudiantes ordenados alfabéticamente. Recorre la base de datos y organiza a los estudiantes por grado.

```typescript
roster() {
    const result: Record<number, string[]> = {}
    for (let [student, grade] of Object.entries(this.db)) {
        result[grade] = result[grade] ? [...result[grade], student].sort() : [student]
    }
    return result
}
```

### Pregunta 4: ¿Qué hace el método `add`?

**Respuesta:**
El método `add` añade un nuevo estudiante a la base de datos, asociando su nombre con su grado.

```typescript
add(student: string, grade: number) {
    this.db[student] = grade
}
```

### Pregunta 5: ¿Cuál es la funcionalidad del método `grade`?

**Respuesta:**
El método `grade` toma un grado como parámetro y devuelve un array de nombres de estudiantes en ese grado, ordenados alfabéticamente.

```typescript
grade(key: number) {
    const result: string[] = []
    for (let [student, grade] of Object.entries(this.db)) {
        if (grade === key) {
            result.push(student)
        }
    }
    return result.sort()
}
```

### Pregunta 6: ¿Cómo se organiza la información en `roster`?

**Respuesta:**
En `roster`, se recorre cada entrada de la base de datos, agrupando a los estudiantes por su grado. Si el grado ya existe en el objeto `result`, se agrega el nuevo estudiante a la lista correspondiente y luego se ordena alfabéticamente. Si no, se crea una nueva lista para ese grado.

```typescript
roster() {
    const result: Record<number, string[]> = {}
    for (let [student, grade] of Object.entries(this.db)) {
        result[grade] = result[grade] ? [...result[grade], student].sort() : [student]
    }
    return result
}
```
[Video](https://youtu.be/Hr16bxmpPY8)