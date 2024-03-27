# SEEP
Sistema de evaluación de etapa productiva de los aprendices del CDITI

Integrantes:
1. Juan Pablo Villada Jaramillo
2. Cristian David Cantillo Niebles
3. Brandon Rendon Espinosa
4. Jhon Anderson Beltran Echavarria

Instrucciones:
1. Paso 1: Debes importar en tu administrador de base de datos favorito (phpmyadmin, workbench), crea la base de datos llamada seep, luego en la raiz del proyecto entra a la carpeta database, en ella encontrarás el archivo para importar en tu base de datos, en el está la creación de las tablas y la insercción de cada usuario.


2. Paso 2: Una vez configurado el servidor y el cliente, debes ir a la carpeta backend, entras a la carpeta config, verás un archivo database.js el cual contendrá la configuración para conectarse a la base de datos, una vez dentro, según el administrador de BD que estés utilizando debes configurar la conexión de forma muy rápida, si usas mysql workbench y usas el usuaro por defecto de worbenck y el puerto por defecto, deja la configuaración tal como está ya que está configurada para trabajar con workbench con el usuario root que viene con workbench,
const sequelize = new Sequelize("seep", "root", "root", {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});
"seep", "root", "root", <- aquí estableces la conexión a tu base de datos "seep" es el nombre de la base de datos, el primer "root" es el nombre de usuario que usas en tu administrador de base de datos, remplazalo por tu propio usuario en caso de que uses uno diferente al por defecto, el siguien "root" es la conotraseña de tu usuario, establece tu contraseña en caso de que sea una diferente y en "port:" debes colocar el puerto que estés utilizando en tu administrador de bases de datos, de la misma manera es para phpmyadmin con xammp, lo único que debes tener en cuenta es que si usas xammp con el usuario que trae por defecto, en el segundo "root" que es la contraseña, debes dejarla vacia "", ya que xampp por defecto no trae contraseña, con esto deberías poder contectarte a tu base de datos correctamente.


3. Paso 3: Una vez lista tu base de datos, debes dirigirte a los archivos del proyecto, si deseas probar el programa tanto en tu pc como en tu celular necesitas configurar en el lado del servidor y el lado del cliente la dirrección ip de tu red, primero abre el cmd o la terminal de tu pc y si es windows escribe ipconfig y presionas enter, verás varias dirrecciones, copias la dirrección ipv4 que sale ahí, si tienes un mac, debes ir a tu terminal y escribir el siguiente comando: adri(~ )$ ifconfig en0 y presionas enter, debes copiar la dirrección que sale en intet, ejemplo inet 192.168.1.10 <- esta seria tu dirección ip, por último, en linux, abre tu terminal y escribe ifconfig y presiona enter, busca donde dice inet y copa la dirrección que sale ahí, una vez copiada tu dirrección ip, primero dirígete a la carpeta backend del proyecto, y entra en el archivo index.js, una vez dentro, busca la linea que tenga la configuración de CORS, que es el que permite realizar accesos desde dominios externos al del servidor, esta es la linea:
// Habilitar cors.
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // Establecer las cookies al frontend.
}));

remplaza localhost por tu dirección ip, por ejemplo: 'http://192.168.1.10:3000', con esto la dirreción para el cliente estaría lista, luego dirígete a la carpeta frotend del proyecto, luego entra a la carpeta src y busca la carpeta api, en ella habrá un archivo axios.js entra en el, verás la conexión del cliente con el servidor en esta linea:
const clienteAxios = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

debes realizar los mismos pasos que en el backend, remplaza localhost por tu dirección ip, 192.168.1.10:5000, con esto le estás dando permiso al cliente de poder acceder al servidor y podrás iniciar sessión, crear usuarios y realizar todas las acciones disponibles en el programa.

4. Paso 4: Una vez configurado el servidor y el cliente, ya estás a punto de iniciar tu programa, el último paso de configuración es instalar las dependencias necesarias tanto para el servidor como para el cliente para que el programa funcione correctamente, primero, si usas visual studio code, presiona click derecho en la carpeta backend, y en las opciones selecciona abrir en terminal integrado, se abrirá una terminal de vs code dentro de la carpeta backend, una vez allí escribe npm i o npm install y presiona enter, esto instalará todas las dependencias necesarias para el servidor que están declaradas en el archivo package.json, una vez instaladas, realiza los mismos pasos para la carpeta frontend, presiona click derecho en la carpeta frontend y selecciona abrir en terminal integrado, una vez allí escribe de nuevo npm install para instalar las dependencias del lado del cliente, una vez instaladas estarás
lista(o) para ejecutar el programa.

5. Paso 5: Una vez instaladas las dependencias, dirigite a la terminal de la carpeta del backend que abriste en el paso anteriror y escribe, npm start, esto iniciará el servidor, te debe salir que el servidor está corriendo en el puerto 5000 y que la conexión a tu base de datos se ha establecido exitosamente, así:

> seep@1.0.0 start
> node ./index.js 

Server running on port 5000
Executing (default): SELECT 1+1 AS result
Connection established successfully .

Con esto ya tu servidor y tu base de datos estarían conectados exitosamente, luego de esto debes dirigirte a la terminal del frontend y de nuevo escribes npm start, con esto se inciairá el cliente y se abrirá en tu navegador, por defecto React abre el proyecto con la dirrección localhost:3000 en tu navegador, cuandoo el cliente se incia correctamente, te saldrá así en la terminal:
You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.10:3000    

Note that the development build is not optimized.
To create a production build, use npm run build. 

webpack compiled successfully,

usa la dirreción que te da en la linea On your network para abrir el proyecto en el navegador, podrás utilizar esa misma dirreción en tu celular para ver el programa en el navegador de tu celular, si todo ha salido bien deberás estar en la interfaz de login.

6. paso 6: Debes seleccionar tu rol de usuario y ingresar las credenciales correctas para inciar sessión,
Usuarios:
    1. Admin: para ir al panel del administrador y crear usuarios, por defecto se ha asigando un usuario administrador para crear los usuarios y las fichas,

    selecciona el rol administrador, en número de documento escribe: 1456893,
    y en la contraseña escribe: Ab%12345

    presiona iniciar sesión deberías poder ingresar correctamente como Administrador.

    2. Instructor: Para ingresar a la interfaz del usuario instructor, se ha registrado un usuario de prueba,

    rol de usuario: Instructor

    número de documento: 1234567

    contraseña: Ab%12345

    con esto deberías ingresar correctamente a la interfaz de usuario instructor.

    3. Aprendiz: Para ingresar a la interfaz del usuario Aprendiz, se ha registrado un usuario de prueba,

    rol de usuario: Aprendiz

    número de documento: 21456789

    contraseña: Jp%12345


Con el programa ya estará funcionando correctamente y se podrán realizar las pruebas que sean necesarias.
