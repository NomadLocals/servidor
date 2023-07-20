# DESCRIPCION

<img src="./client/public/4.png" alt="Texto alternativo" width="100%" height="auto">


La API de NomadLocals es una interfaz de programación de aplicaciones que proporciona acceso a diversas funcionalidades y datos relacionados con el proyecto NomadLocals. Esta API permite a los desarrolladores integrar y utilizar los servicios de NomadLocals en sus propias aplicaciones y plataformas.

La API de NomadLocals ofrece una amplia gama de endpoints y métodos que permiten a los desarrolladores interactuar con la plataforma y acceder a datos como eventos, usuarios, experiencias, reseñas y más. Los desarrolladores pueden utilizar estos endpoints para crear, actualizar y eliminar eventos, realizar búsquedas de eventos por ubicación o categoría, gestionar usuarios y sus perfiles, y realizar acciones relacionadas con la interacción entre usuarios, como enviar mensajes o dejar reseñas.

La API de NomadLocals está diseñada siguiendo los principios RESTful, lo que facilita su integración en aplicaciones web y móviles. Los endpoints están protegidos con autenticación para garantizar la seguridad de los datos y la privacidad de los usuarios.

En resumen, la API de NomadLocals es una herramienta poderosa que permite a los desarrolladores aprovechar la funcionalidad y los datos de NomadLocals para crear experiencias personalizadas, innovadoras y enriquecedoras para los usuarios de la plataforma.

<details>
  <summary>ROUTES USER</summary>

Aqui encontraremos todos los endpoints referentes o necesarios para _crear_, _actualizar_, _eliminar_, ver un usuario o ver todos los usuarios.

- ### ROUTER

  <details>
   <summary>Get All Users</summary>
   <br> Devuelve una lista de todos los usuarios registrados en la plataforma Nomad Locals.

  - ##### URL
    `GET(.../users)`

  - ##### Parametros de la solicitud

    No se requieren parametros

  - ##### Respuesta exitosa

      Codigo de estado: _200_ **ok**
      ![informacionde getAllUsers](ruta_de_la_imagen.png)

  - ##### Respuesta de error
      Codigo de estado: _500_ **Internal Server Error**
      <br> `"error": "internal server error"`

  </details>

  <details>
  <summary>Get User By Id</summary>

    <br> Devuelve los datos de un usuario registrado en la plataforma Nomad Locals.
  - #### URL
    `GET(.../users/:id)`
  - #### Parametros de la solicitud
    Se debe pasar por params el *id* del usuario a consultar
  - #### Respuesta exitosa
    Codigo de estado: *200* **ok**
    ![informacionde getUserById](ruta_de_la_imagen.png)
  - #### Respuesta de error
    Codigo de estado: *500* **Internal Server Error**
    <br> `"error": 'internal server error'`

  </details>

  <details>
  <summary>Post User</summary>

    <br> Se agregan los datos del usuario a registrar en la plataforma Nomad Locals.

  - #### URL
    `POST(.../users)`

  - #### Parametros de la solicitud
    Se debe pasar por body lassiguientes propiedades para la creacion de un usuario.

      **Propiedades necesarias:**

      - firstName
      - lastName
      - userName
      - email
      - password
      - googleAccount
      - verifiedEmail
      - interests
      - admin

      **Propiedades opcionales:**
      - geolocation
      - gender

  - #### Respuesta exitosa
    Codigo de estado: _200_ **ok**
    ![informacionde getUserById](ruta_de_la_imagen.png)
  - #### Respuesta de error
    Codigo de estado: _500_ **Internal Server Error**
    <br> `"error": 'internal server error'`

  </details>

  <details>
  <summary>Put User</summary>

  <br> Esta ruta permite actualizar los datos de un usuario existente en la plataforma Nomad Locals.

  - #### URL

      `PUT(.../users/:id)`

  - #### Parametros de la solicitud

    Se debe proporcionar el *id* del usuario en la ruta (:id) y los datos actualizados del usuario en el cuerpo de la solicitud.

  - #### Respuesta exitosa
    Codigo de estado: _200_ **ok**
    ![informacionde getUserById](ruta_de_la_imagen.png)
  - #### Respuesta de error
    Codigo de estado: _500_ **Internal Server Error**
    <br> `"error": 'internal server error'`

  </details>

  <details>
  <summary>Delete User</summary>

  <br> Esta ruta permite eliminar un usuario existente en la plataforma Nomad Locals.

  - #### URL

      `DELETE(.../users/:id)`

  - #### Parametros de la solicitud

    Se debe proporcionar el *id* del usuario en la ruta (:id) en el cuerpo de la solicitud.

  - #### Respuesta exitosa
    Codigo de estado: _200_ **ok**
    ![informacionde getUserById](ruta_de_la_imagen.png)
  - #### Respuesta de error
    Codigo de estado: _500_ **Internal Server Error**
    <br> `"error": 'internal server error'`

  </details>
Con el manejor de las anteriores rutas puede manipular el modelo users completamente.
</details>

<details>
  <summary>ROUTER EVENT</summary>

</details>

<details>
  <summary>ROUTER REPORT EVENT</summary>
</details>

<details>
  <summary>ROUTER REPORT USER</summary>
</details>

<details>
  <summary>ROUTER REVIEW EVENT</summary>
</details>

<details>
  <summary>ROUTER REVIEW USER</summary>
</details>
<details>
  <summary>PARA LLENAR</summary>
</details>
