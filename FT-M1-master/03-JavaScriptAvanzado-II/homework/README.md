# Homework JavaScript Avanzado II

## Closures

Resolvé los ejercicios en el archivo `homework.js`.
Para ejecutar los test, anda a esta carpeta y ejecutá:
`npm install` y luego:
`npm test`.

## Extra Credit

### OOP - Prototypes

### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

````javascript
console.log("hola".repeatify(3)); //holaholahola

/* ### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

```javascript */

function repeatify(num) {
  let newString = "";
  return function (arg) {
    if (num <= 0) {
      return newString;
    }
    for (let i = 0; i < num; i++) {
      newString += arg;
    }
    return newString;
  };
}

String.prototype.repeatify = function (num) {
  if (num === 0) return "";
  let newString = "";
  for (let i = 0; i <= num; i++) {
    newString += this;
  }

  return newString;
};

console.log("hola".repeatify(3)); //holaholahola
````

### Shapes

- Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
- Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
- Agregá un nuevo método al prototipo llamado `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
> var t = new Triangle(1, 2, 3);
> t instanceof Triangle
// true
> Shape.prototype.isPrototypeOf(t);
// true
> t.getPerimeter();
// 6
> t.getType();
// "Triangle"


// SHAPES

class shape {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }

  getPerimeter() {
    if (this.type === 'Triangle') {
      return this.a + this.b + this.c;
    }
    if (this.type === 'Circle') {
      return 2 * 3.14 * this.radio;
    }
    if (this.type === 'Square') {
      return this.lado * 4;
    }
  }

  getArea() {
    if (this.type === 'Circle') {
      return 3.14 * this.radio  2
    }
    if (this.type === 'Triangle') {
      return (this.a * this.b) / 2;
    }
    if (this.type === 'Square') {
      return this.lado  2;
    }
  }

}


class Triangle extends shape {
  constructor(a,b,c,type='Triangle') {
    super(type);
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

class Circle extends shape {
  constructor(radio, type='Circle') {
    super(type);
    this.radio = radio;
  }
}

class Square extends shape {
  constructor (lado, type = 'Square') {
    super(type);
    this.lado = lado;
  }
}

```

- Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
> var c = new Circle(2);
> c instanceof Circle
// true
> Shape.prototype.isPrototypeOf(c);
// true
> c.getPerimeter();
// 12.566370614359172
> c.getType();
// "Circle"
```

- Creá una última `shape` llamada `Square`.
- Agregá el método `getArea` de todas las `shape`s.
