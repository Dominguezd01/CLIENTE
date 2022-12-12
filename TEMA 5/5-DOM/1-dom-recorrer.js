/***********************************************************
 * EL DOM.
 *     PROPIEDADES QUE NOS PERMITEN ACCEDER A ELEMENTOS DEL DOM
 */

/***********************************************************
 * DOCUMENT / BODY / HEAD
 *      Permiten acceder directamente a estos elementos del documento
 * document
 * document.body
 * document.head
 */

/***********************************************************
 * PROPIEDADES QUE PERMITEN RECORRER LOS ELEMENTOS DEL DOM
 *
 * elemento.parentElement           // Elemento padre
 *
 * elemento.previousElementSibling  // Elemento anterior
 * elemento.nextElementSibling      // Elemento siguiente
 *
 * elemento.children                // Colección: elementos hijos
 * elemento.firstElementChild       // primer elemento hijo
 * elemento.lastElementChild        // último elemento hijo
 */

/***********************************************************
 * PROPIEDADES QUE PERMITEN RECORRER TODOS LOS NODOS DEL DOM
 *
 * elemento.parentNode          // Nodo padre
 *
 * elemento.previousSibling     // Nodo anterior
 * elemento.nextSibling         // Nodo siguiente
 *
 * elemento.childNodes          // Colección: nodos hijos
 * elemento.firstChild          // primer nodo hijo
 * elemento.lastChild           // último nodo hijo
 * elemento.hasChildNodes()     // si tiene nodos hijos (o no)
 */

/***********************************************************
 * COLECCIONES
 *  Algunas propiedades de los elementos (ej. children) son COLECCIONES
 *  Las colecciones tienen estas propiedades:
 *  - son Iterables (for..of)
 *  - se pueden indexar []
 *  - tienen la propiedad .length
 *  - por lo anterior, son transformables en Array (Array.from())
 *	- son de solo lectura
 *	- algunas son colecciones "vivas"
 *
 * Ejemplo:
 *   elemento.children
 */

/***********************************************************
 * TABLAS
 *  Los elementos de las tablas tienen propiedades
 *  que facilitan acceder a sus elementos
 *
 *  tabla.caption           => Elemento "CAPTION" de la tabla
 *  tabla.tHead             => Elemento "THEAD" de la tabla
 *  tabla.tBodies           => Colección. Elementos de tipo  "TBODY" de la tabla
 *  tabla.tFoot             => Elemento "TFOOT" de la tabla
 *
 *  tabla.rows              => Colección. Elementos de tipo "TR"
 *  mitBody.rows            => Colección. Elementos de tipo "TR"
 *
 *  fila.cells              => Colección. Elementos de tipo "TD" y "TH"
 *  fila.sectionRowIndex    => Número. Índice de la fila en su selección
 *  fila.rowIndex           => Número. Índice de la fila en la tabla
 *  celda.cellIndex         => Número. Índice de la celda en su fila
 */

/// EXTRAS
elemento.style.color = "red";
elemento.style.fontSize = "2em";
