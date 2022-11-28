/***********************************************************
 * TIPOS DE NODOS DEL DOM
 *  Los nodos del DOM son de distintos tipos:
 *      Node / Text / Comment / Element
 *
 *  y están organizados formando una jerarquía: unos son subtipos de otros:
 *      Node =>
 *          Text
 *          Comment
 *          Element =>
 *              HTMLElement =>
 *                   HTMLInputElement       ("INPUT")
 *                   HTMLBodyElement        ("BODY")
 *                   HTMLAnchorELement      ("A")
 *                   ...
 */

/***********************************************************
 * PROPIEDADES DE TODOS LOS NODOS (Node)
 *  .nodeType: valor numérico que indica el tipo de nodo
 *              1: Element; 3: Text; 9: Document
 *  .nodeName: cadena que indica el tipo de nodo
 *              Si el nodo es un elemento: es igual a tagName (ej. "SPAN"),
 *                  siempre en mayúsculas
 */

/***********************************************************
 * PROPIEDADES DE LOS NODOS DE TIPO ELEMENTO (Text)
 *  .nodeValue o .data: contenido del nodo de texto
 *              Se suele utilizar data
 */

/***********************************************************
 * PROPIEDADES DE LOS NODOS DE TIPO ELEMENTO (HTMLElement)
 *  .tagName:   cadena. Indica el tipo de elemento
 *              Es igual a nodeName (ej. "SPAN"),
 *  .innerHTML: cadena. HTML incluido en un elemento
 *              Si no es válido, JavaScript lo corrige
 *              Se pueden insertar scripts, pero no se ejecutan
 *  .outerHTML: cadena. HTML incluido en un elemento, junto con el elemento
 *  .textContent: cadena. Contenido en texto de un elemento
 *  .id:        cadena. Para dar un id a un elemento
 *  .hidden:    boolean. Para que un elemento sea visible/o no
 */

/***********************************************************
 * PROPIEDADES DE ALGUNOS NODOS DE TIPO ELEMENTO
 *    (DEPENDEN DEL TIPO DE ELEMENTO)
 *
 *  .value:     cadena. Para etiquetas como "INPUT", "SELECT", "TEXTAREA"
 *  .href:      cadena. Para la etiqueta "A"
 *  .src:       cadena. Para etiquetas como "IMG"
 */
