const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // ¡Escribe tu código debajo de esta línea!

  // Agregar un solo número al final de una fila existente (fila 0)
  arr[0].push(99)

  // Agregar una fila completa de números
  arr.push([30, 31, 32, 33, 34, 35, 36, 37, 38, 39])

  // Eliminar un solo número de una fila (el primer elemento de la fila 1)
  arr[1].splice(0, 1)

  // Invertir una de las filas sin afectar a las demás (fila 2)
  arr[2].reverse()

  arr.forEach(fila => console.log(fila))
  
  // ¡Escribe tu código encima de esta línea!