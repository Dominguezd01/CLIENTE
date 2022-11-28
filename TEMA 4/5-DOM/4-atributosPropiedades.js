/***********************************************************
 * ATRIBUTOS ESTÁNDAR DE LAS ETIQUETAS  <etiqueta atributo>
 * Y PROPIEDADES DEL DOM        elemento.propiedad
 *
 ***** CREACIÓN DE PROPIEDADES A PARTIR DE LOS ATRIBUTOS
 *  Al cargar la página HTML y generar el nodo para cada elemento,
 *   se crean propiedades para los atributos estándar de ese elemento:
 *   Ejemplo:
 *      - .id para todos los elementos
 *      - .src para "IMG"
 *
 ***** TIPO DE LAS PROPIEDADES DE LOS NODOS (QUE CORRESPONDEN A TRIBUTOS)
 * Los atributos del las etiquetas son siempre cadenas.
 * Sin embargo, las propiedades de los nodos pueden ser de distintos tipos
 * Ejemplo:
 *      .hidden => boolean
 *      .id     => cadena
 *      .style  => objeto
 *
 ***** CONTENIDO DE LAS PROPIEDADES DE LOS NODOS (QUE CORRESPONDEN A TRIBUTOS)
 * A veces la propiedad no coincide exactamente con el atributo, aunque sean del mismo tipo.
 * Ejemplo:
 *  El atributo href (de un "A"): es una URL completa/relativa/o un #hash
 *  La propiedad href (de un elemento de tipo "A"): es siempre una URL completaa.
 *
 ***** SINCRONIZACIÓN DE PROPIEDAD Y ATRIBUTO
 * Cuando cambia un atributo estándar, la propiedad correspondiente
 * se actualiza automáticamente y viceversa (con algunas excepciones).
 * Excepciones:
 *  - .value    Si se cambia el atributo, cambia la propiedad, pero no al revés
 */

/***********************************************************
 * CÓMO ACCEDER A CUALQUIER ATRIBUTO DE LAS ETIQUETAS (estándar o no)
 *
 *  elemento.hasAttribute("nombre")             => Boolean. Comprueba si existe
 *  elemento.getAttribute("nombre")             => Cadena. Valor del atributo
 *  elemento.setAttribute("nombre", "valor")    => Establece el valor del atributo
 *  elemento.removeAttribute("nombre")          => Elimina el atributo
 *
 * IMPORTANTE: En HTML los atributos no se distinguen mayúsculas y minúsculas
 *      Por eso, en estos métodos, tampoco se distingue.
 *      Ejemplo: Es válido: "id", "ID", "Id", "iD"
 */

/***********************************************************
 * ACCEDER A TODOS LOS ATRIBUTOS
 *  elemento.attributes =>  Colección de objetos con propiedades name / valor
 */

/***********************************************************
 * ATRIBUTOS PERSONALIZADOS Y DATASET
 *  Es posible crear atributos personalizados con .setAttribute
 *  y se puede obtener su valor con .getAttribute
 *
 *  Sin embargo, JavaScript proporciona una propiedad
 *  para todos los elementos: dataset
 *  que facilita crear y acceder a atributos personalizados
 *
 * Condiciones:
 * - los atributos tendrán como nombre "data-loQueSea" o "data-lo-que-sea"
 * - se puede acceder a la propiedad "".dataset.loQueSea" o .dataset.loQueSea"
 *
 * Ejemplo:
 *      Para: <p id="p" data-about="Mi p preferida">texto</p>
 *      Accedemos con: document.getElementById("p").dataset.about
 */
