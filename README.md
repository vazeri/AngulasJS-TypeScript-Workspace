## ¿Qué es esto?
Una pequeña guía de instalación, configuración y ejercicios de programación en TypeScript, para realizar una transicion ordenada del desarrollo tradicional en HTML a Angular JS así como para adaptarse al entorno, lenguaje y establecer un flujo de trabajo para trabajar con AngularJS y Typescript, utilizando el entorno de desarrollo ATOM.

###  ¿Porque Typescript en 2018 ?
Typescript (TS) facilita el desarrollo y trabajo en equipo, compila sobre JS, y toma (casi) todo lo bueno de ECMAScript 6 (ES6), dentro de su entorno de trabajo, TS es desarrollado por Microsoft.

#### ¿Que le falta a JS?
* Tipos de variables
* Errores en tiempo de escritura
* Auto completado dependiendo de la variable
* Método estático de programación
* Clases y módulos (antes de ES6)

#### Problemas con JS
* Errores de variables no definidas
* Objeto con propiedades no esperadas
* Errores porque no se entiende el código de el de alado
* Errores de sobre escritura de variables, clases, funciones o *constantes
* Errores porque código colisiona con el de otro
* Cache del navegador mantiene JS viejos
* Errores de mayúsculas o minúsculas en lugares in correctos
* Errores por que el IDE no indica que se puede o no hacer
* Nos damos cuenta hasta que corre el programa

## Configuración de workspace AngularJS + Typescript
Configuración de espacio de trabajo para AngularJS+Typescript

### Instalar node
https://nodejs.org/dist/v8.9.4/node-v8.9.4-x64.msi

### Instalar Chrome
https://www.google.com/chrome/browser/desktop/index.html

### Abrir/Correr consola Node.JS con permiso de ADMIN

### Instalar Typescript
-g comando para instalar de manera global

```
npm install -g typescript
```
### Instalar Angular CLI
```
npm install -g @angular/cli
```
en caso de actualizar Angular CLI
```
npm uninstall -g angular-cli @angular/cli
npm cache clean
npm install -g @angular/cli@latest
```

### Instalar Ionic
Ionic 2 usa Angular2 (es como un Bootstrap especializado)
```
npm install -g cordova ionic
```

### Instalar ATOM
https://atom.io/download/windows_x64

Una vez instalado, Instalar los siguientes Atom packages:

* angular2 typescript snippets (GregOnNet)
* atom bootstrap 3 (f)
* v-bootstrap4 (thevuong)
* atom-typescript  (TypeStrong)
* file-icons 2.0.15 (file-icons)
* font-awsome-nippetset (kevdotbadger)
* minimap (atom-minimap)
* platformio ide terminal (platformio)
* ng2-snippets ()
* autocomplete-js-import (DanielaGarcia-Carrillo)
* pigments (abe33)

Configurar el paquete
* autocomplete-js-import (DanielaGarcia-Carrillo)
```
Sección "Import types for autocompletion"
Remover palomita a: Commonjs "require"
```

## Iniciando a programar
El folder **TypeScript** contiene distintos ejemplos/ejercicios **01_Plantilla_Base** contiene la estructura de archivos básica para iniciar a escribir código.

Se debe editar el archivo **app.TS** y compilar para poder generar un archivo **app.JS** Este último está incorporado al **index.html** y el resultado puede previsualizado la consola del navegador (Chrome) por medio de la tecla **F12**

### Compilando app.TS
Las aplicaciones escritas en TS compilan por medio del uso de la consola de Atom botón **+**  (Esquina inferior izquierda)

Una vez abierta la consola escribir
```
tsc app -w
```
El comando **-w** permite a Atom realizar un monitoreo continuo cada que se guarda el archivo TS **Ctrl + S**, si este se remueve se realizara una compilación de única vez
