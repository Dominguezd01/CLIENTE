/***********************************************************
 * MÉTODOS PARA BUSCAR
 */

/***********************************************************
 * MÉTODO PARA BUSCAR UN ELEMENTO POR SU ID
 *      document.getElementById(id)  => Elemento
 *      NUNCA: elemento.getElementById(id)
 *
 * Nota:
 *   Cuando se define un elemento con un id,
 *   El motor de JavaScript crea una variable global con el nombre del id
 *   que apunta a ese nodo del DOM.
 *   Pero, OJO, si hay una variable definida con ese nombre, tiene prioridad.
 *   Por eso: NO ES RECOMENDABLE.
 */

/***********************************************************
 * MÉTODOS PARA BUSCAR POR ETIQUETA, CLASE O NAME (ENTRE LOS DESCENDIENTES)
 *   elemento.getElementsBy*
 *      Devuelven una colección VIVA
 *
 *  elemento.getElementsByTagName("tag")    => Colección. Elementos descendientes con esa etiqueta
 *  elemento.getElementsByTagName("*")		-> Colección. Todos los elementos descendientes
 *  elemento.getElementsByClasName("clase")	-> Colección. Elementos descendientes de esa clase
 *  elemento.getElementsByName("name")		-> Colección. Elementos descendientes con ese "name"
 */

/***********************************************************
 * MÉTODOS PARA BUSCAR CON SELECTOR CSS (ENTRE LOS DESCENDIENTES))
 *   elemento.querySelector*
 * 
 *  elemento.querySelectorAll("selectorCSS")    => Colección. Descendientes seleccionables con ese CSS
 *  elemento.querySelector("selectorCSS")		=> Elemento. Primer elemento descendiente seleccionable con ese CSS

/***********************************************************
 * MÉTODOS PARA BUSCAR CON SELECTOR CSS (ENTRE ESE ELEMENTO Y SUS ASCENDIENTES)
 *   elemento.closest("selectorCSS")
 *      Devuelve el primer elemento seleccionable con ese selector
 *      entre el elemento (incluido) y sus antecesores
 */

/***********************************************************
 * MÉTODOS PARA SABER SI UN ELEMENTO ES SELECCIONABLE CON UN SELECTOR CSS
 *   elemento.matches("selectorCSS")		-> true/false
 *      Devuelve true/false según el elemento sea seleccionado o no por el selector
 */
