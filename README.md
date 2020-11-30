# Ejecucion de la aplicacion

Este proyecto funciona con yarn.

Para solucionar el problema que surgio de Cors en la Api de los Comics, hay que utilizar el servidor proxy que esta en este repositorio =

### `https://github.com/Diego-Ardila/masiv-proxy.git`

una vez clonado en tu servicio local, debes ubicarte en la ruta donde quedo guardado y ejecutar el comando=

### `yarn start`

El proxy queda corriendo en el puerto 8000.

Despues debes clonar, este repositorio a tu servicio local=

### `https://github.com/Diego-Ardila/masiv-test.git`

luego en tu consola de comandos, ubicado en la ruta del proyecto, debes pulsar el siguiente comando=

### `yarn start`

Entonces se abrira en tu navegador en el puerto 3000. Y podras empezar la interaccion con la aplicacion.

## Interaccion

Tan pronto como se monta el componente, se hace un llamado a una Api de Comics y se trae la informacion de un comic aleatoriamente. 
se renderiza el titulo del comic, su respectiva imagen y un pequeño componente que permite calificar cada comic; este renderiza 
5 estrellas y reproduce su respectivo valor en cuanto a calificacion desde malo(Bad) a excelente(Excellent). Por ultimo se puede 
interactuar con un boton que nos permite llamar un nuevo comic para darle su respectiva calificacion.

Disfruta interactuando con "Random comic store".

