# Descripción

![NomadLocals](https://res.cloudinary.com/dwit2djhy/image/upload/v1690153675/Nomadlocals/Logos/4_dpd03p.png)

La API de NomadLocals es una interfaz de programación de aplicaciones que proporciona acceso a diversas funcionalidades y datos relacionados con el proyecto NomadLocals. Esta API permite a los desarrolladores integrar y utilizar los servicios de NomadLocals en sus propias aplicaciones y plataformas.

La API de NomadLocals ofrece una amplia gama de endpoints y métodos que permiten a los desarrolladores interactuar con la plataforma y acceder a datos como eventos, usuarios, experiencias, reseñas y más. Los desarrolladores pueden utilizar estos endpoints para crear, actualizar y eliminar eventos, realizar búsquedas de eventos por ubicación o categoría, gestionar usuarios y sus perfiles, y realizar acciones relacionadas con la interacción entre usuarios, como enviar mensajes o dejar reseñas.

La API de NomadLocals está diseñada siguiendo los principios RESTful, lo que facilita su integración en aplicaciones web y móviles. Los endpoints están protegidos con autenticación para garantizar la seguridad de los datos y la privacidad de los usuarios.

En resumen, la API de NomadLocals es una herramienta poderosa que permite a los desarrolladores aprovechar la funcionalidad y los datos de NomadLocals para crear experiencias personalizadas, innovadoras y enriquecedoras para los usuarios de la plataforma.

## ROUTES USER

**Información Base**

- URL base: `https://esto-es-un-ejemplo.com`

Aqui encontraremos todos los endpoints referentes o necesarios para _crear_, _actualizar_, _eliminar_, ver un usuario o ver todos los usuarios.

<details>
  <summary><strong> Post User </strong></summary>

<br> Crea un nuevo usuario en la plataforma NomadLocals. Si el usuario ya está registrado (basado en el correo electrónico), se actualizarán los datos existentes.

- **URL**: `POST(.../users)`

- **Parámetros de la solicitud**:

  - `firstName`: (String) Nombre del usuario (requerido)
  - `lastName`: (String) Apellido del usuario (requerido)
  - `userName`: (String) Nombre de usuario (requerido)
  - `email`: (String) Correo electrónico del usuario (requerido, debe ser único)
  - `interests`: (String) Intereses del usuario (requerido)
  - `place`: (String) Lugar del usuario (requerido)
  - `age`: (Number) Edad del usuario (requerido)
  - `geolocation`: (JSON) Ubicación del usuario en formato JSON (requerido)
  - `gender`: (String) Género del usuario (opcional, opciones: "Male", "Female", "No specified", "Others")
  - `admin`: (Boolean) Rol de administrador del usuario (opcional, por defecto es `false`)
  - `image`: (String) URL de la imagen del usuario (requerido)
  - `phone`: (Array de Strings) Números de teléfono del usuario (requerido)

- **Respuesta exitosa**:

  - Código de estado: **_200_ ok**
  - ![informacionde getUserById](ruta_de_la_imagen.png)

- **Respuesta de error**:
  - Código de estado: _500_ **Internal Server Error**
  - JSON con el mensaje: `"error": 'internal server error'`

</details>
<details>
  <summary><strong> Get All Users </strong></summary>
  <br> Obtiene una lista de todos los usuarios registrados en la plataforma NomadLocals, incluyendo información adicional como reportes, reseñas y eventos asociados.

- **URL**: `GET(.../users)`

- **Parámetros de la solicitud**: No se requieren parametros

- **Respuesta exitosa**:

  - Código de estado: _200_ **ok**
  - Datos de todos los usuarios en formato JSON
  - ![informacionde getAllUsers](ruta_de_la_imagen.png)

- **Respuesta de error**:
  - Código de estado: **404 Not Found**
  - JSON con el mensaje `"error": "No se encontraron usuarios"`

</details>

<details>
  <summary><strong>Get User By Id</strong></summary>

<br> Devuelve los datos de un usuario registrado en la plataforma Nomad Locals.

- **URL**: `GET(.../users/:id)`

- **Parametros de la solicitud**:
- `id`: (String) ID del usuario a consultar.

- **Respuesta exitosa**:

  - Código de estado: _200_ **ok**
  - Datos del usuario en formato JSON
  - ![informacionde getUserById](ruta_de_la_imagen.png)

- **Respuesta de error**:
  - Código de estado: 404 Not Found
  - JSON con el mensaje: `"error": "Usuario no encontrado"`

</details>

<details>
  <summary><strong>Put User</strong></summary>

<br> Actualiza los datos de un usuario existente en la plataforma NomadLocals.

- **URL**: `PUT(.../users/:id)`

- **Parametros de la solicitud**:
- `id`: (String) ID del usuario a actualizar en la URL.
  - Datos actualizados del usuario en el cuerpo de la solicitud.
- **Respuesta exitosa**:

  - Código de estado: _200_ **ok**
  - Datos del usuario actualizado en formato JSON
  - ![informacionde getUserById](ruta_de_la_imagen.png)

- **Respuesta de error**:
  - Código de estado: _500_ **Internal Server Error**
  - JSON con el mensaje: `"error": "Usuario no encontrado"`

</details>

<details>
  <summary><strong>Delete User</strong></summary>

<br> Elimina un usuario existente de la plataforma NomadLocals basándose en su ID.

- **URL**: `DELETE(.../users/:id)`

- **Parametros de la solicitud**:

- `id`: (String) ID del usuario a eliminar.

- **Respuesta exitosa**:

  - Código de estado: _200_ **ok**
  - JSON con el mensaje>: `"message": "Usuario eliminado"`
  - ![informacionde getUserById](ruta_de_la_imagen.png)

- **Respuesta de error**:
  - Código de estado: _500_ **Internal Server Error**
  - JSON con el mensaje `"error": "Usuario no encontrado"`

</details>

- Todas las respuestas exitosas contendrán datos en formato JSON con la información requerida.
- En caso de errores, se proporcionarán mensajes claros y descriptivos para facilitar el manejo de excepciones.
- Con el manejo de las anteriores rutas puede manipular el modelo users completamente.

## Rutas de Eventos

<details>
  <summary><strong>Crear un evento</strong></summary>

Crea un nuevo evento en la plataforma NomadLocals. Si el evento ya está registrado (basado en el nombre y la fecha del evento), se actualizarán los datos existentes.

- URL: `POST /events`

- Parámetros de la solicitud:

  - `userId`: (String) ID del usuario creador del evento (requerido)
  - `name`: (String) Nombre del evento (requerido)
  - `activityType`: (String) Tipo de actividad del evento (requerido)
  - `description`: (String) Descripción del evento (requerido)
  - `eventDate`: (Date) Fecha del evento (requerido)
  - `minSizePeople`: (Number) Tamaño mínimo del grupo para el evento (requerido)
  - `duration`: (String) Duración del evento (requerido)
  - `image`: (String) URL de la imagen del evento (requerido)
  - `place`: (String) Lugar del evento (requerido)
  - `location`: (JSON) Ubicación del evento en formato JSON (requerido)
  - `minCost`: (Number) Costo mínimo del evento (requerido)
  - `active`: (Boolean) Indicador de si el evento está activo o no (opcional, por defecto es `true`)

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos del evento creado o actualizado en formato JSON

- Respuesta de error:

  - Código de estado: **500 Internal Server Error**
  - JSON con el mensaje: `"error": "internal server error"`

</details>

<details>
  <summary><strong> Obtener todos los eventos</strong></summary>

Obtiene una lista de todos los eventos registrados en la plataforma NomadLocals, incluyendo información adicional como reportes, reseñas y usuarios asociados.

- URL: `GET /events`

- Parámetros de la solicitud: Ninguno

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos de todos los eventos en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "No se encontraron eventos"`

</details>

<details>
  <summary><strong>Obtener un evento por ID</strong></summary>

Devuelve los datos de un evento registrado en la plataforma NomadLocals basándose en su ID.

- URL: `GET /events/:id`

- Parámetros de la solicitud:

  - `id`: (String) ID del evento a consultar.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos del evento en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Evento no encontrado"`

</details>

<details>
  <summary><strong>Actualizar un evento</strong></summary>

Actualiza los datos de un evento existente en la plataforma NomadLocals.

- URL: `PUT /events/:id`

- Parámetros de la solicitud:

  - `id`: (String) ID del evento a actualizar en la URL.
  - Datos actualizados del evento en el cuerpo de la solicitud.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos del evento actualizado en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Evento no encontrado"`

</details>

<details>
  <summary><strong>Eliminar un evento</strong></summary>

Elimina un evento existente de la plataforma NomadLocals basándose en su ID.

- URL: `DELETE /events/:id`

- Parámetros de la solicitud:

  - `id`: (String) ID del evento a eliminar.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - JSON con el mensaje: `"message": "Evento eliminado exitosamente"`

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Evento no encontrado"`

</details>

## Rutas de Usuarios en Eventos

<details>
  <summary><strong>Unirse a un evento</strong></summary>

Esta ruta une a un usuario existente a un evento específico.

- URL: `POST /events/:id/users`

- Parámetros de la solicitud:

  - `id`: (String) ID del evento al que se unirá el usuario (parámetro de ruta).
  - `userId`: (String) ID del usuario que se unirá al evento (en el cuerpo de la solicitud).

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - JSON con el mensaje: `"message": "Usuario unido exitosamente al evento"`

- Respuesta de error:

  - Código de estado: **500 Internal Server Error**
  - JSON con el mensaje: `"error": "Error al unir usuario al evento"`

</details>

<details>
  <summary><strong>Eliminar usuario del evento</strong></summary>

Esta ruta elimina a un usuario existente de un evento específico.

- URL: `DELETE /events/:id/users`

- Parámetros de la solicitud:

  - `id`: (String) ID del evento del que se eliminará el usuario (parámetro de ruta).
  - `userId`: (String) ID del usuario que se eliminará del evento (en la consulta).

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - JSON con el mensaje: `"message": "Usuario eliminado exitosamente del evento"`

- Respuesta de error:

  - Código de estado: **500 Internal Server Error**
  - JSON con el mensaje: `"error": "Error al eliminar usuario del evento"`

</details>

## Rutas de Filtrado de Eventos

<details>
  <summary><strong>Filtrar Eventos</strong></summary>

Obtiene una lista de eventos filtrados en base a los parámetros de búsqueda proporcionados.

- URL: `GET /filter`

- Parámetros de la solicitud:

  - `name`: (String) Filtra eventos por el nombre (opcional).
  - `activityType`: (String) Filtra eventos por el tipo de actividad (opcional).
  - `size`: (Object) Filtra eventos por el tamaño mínimo y máximo del grupo (opcional).
    - `min`: (Number) Tamaño mínimo del grupo.
    - `max`: (Number) Tamaño máximo del grupo.
  - `minCost`: (String) Filtra eventos por el costo mínimo (opcional).
    - Valores válidos: `"all"` (todos los eventos), `"free"` (eventos gratuitos), `"notFree"` (eventos de pago).
  - `eventDate`: (Date) Filtra eventos por la fecha del evento (opcional).

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos de los eventos filtrados en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"message": "No se encontraron eventos"`

- Respuesta de error:

  - Código de estado: **500 Internal Server Error**
  - Texto con el mensaje: `"Error al buscar eventos"`

</details>

## Rutas del Administrador

<details>
  <summary><strong>Obtener todos los usuarios para el administrador</strong></summary>

Obtiene una lista de todos los usuarios registrados en la plataforma NomadLocals para el rol de administrador.

- URL: `GET /admin/:id/users`

- Parámetros de la solicitud:

  - `id`: (String) ID del administrador.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos de todos los usuarios en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Lo sentimos no pudimos obtener los usuarios"`

</details>

<details>
  <summary><strong>Obtener todos los eventos para el administrador</strong></summary>

Obtiene una lista de todos los eventos registrados en la plataforma NomadLocals para el rol de administrador.

- URL: `GET /admin/:id/events`

- Parámetros de la solicitud:

  - `id`: (String) ID del administrador.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos de todos los eventos en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Lo sentimos no pudimos obtener los eventos"`

</details>

<details>
  <summary><strong>Obtener todos los reportes de usuarios para el administrador</strong></summary>

Obtiene una lista de todos los reportes de usuarios registrados en la plataforma NomadLocals para el rol de administrador.

- URL: `GET /admin/:id/reportuser`

- Parámetros de la solicitud:

  - `id`: (String) ID del administrador.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos de todos los reportes de usuarios en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Lo sentimos no pudimos obtener los reportes"`

</details>

<details>
  <summary><strong>Obtener todos los reportes de eventos para el administrador</strong></summary>

Obtiene una lista de todos los reportes de eventos registrados en la plataforma NomadLocals para el rol de administrador.

- URL: `GET /admin/:id/reportevent`

- Parámetros de la solicitud:

  - `id`: (String) ID del administrador.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos de todos los reportes de eventos en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Lo sentimos no pudimos obtener los reportes"`

</details>

<details>
  <summary><strong>Obtener todas las reseñas de usuarios para el administrador</strong></summary>

Obtiene una lista de todos los reviews de usuarios registrados en la plataforma NomadLocals para el rol de administrador.

- URL: `GET /admin/:id/reviewuser`

- Parámetros de la solicitud:

  - `id`: (String) ID del administrador.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos de todos los reviews de usuarios en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Lo sentimos no pudimos obtener los reviews"`

</details>

<details>
  <summary><strong>Obtener todas las reseñas de eventos para el administrador</strong></summary>

Obtiene una lista de todos los reviews de eventos registrados en la plataforma NomadLocals para el rol de administrador.

- URL: `GET /admin/:id/reviewevent`

- Parámetros de la solicitud:

  - `id`: (String) ID del administrador.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos de todos los reviews de eventos en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Lo sentimos no pudimos obtener los reviews"`

</details>

<details>
  <summary><strong>Actualizar usuario para el administrador</strong></summary>

Actualiza los datos de un usuario existente en la plataforma NomadLocals para el rol de administrador.

- URL: `PUT /admin/:id/put/user`

- Parámetros de la solicitud:

  - `id`: (String) ID del administrador en la URL.
  - Datos actualizados del usuario en el cuerpo de la solicitud.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos del usuario actualizado en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"message": "Evento no encontrado"`

</details>

<details>
  <summary><strong>Actualizar estado de usuario (eliminar usuario) para el administrador</strong></summary>

Restaura un usuario eliminado previamente de la plataforma NomadLocals para el rol de administrador.

- URL: `GET /admin/:id/userreset`

- Parámetros de la solicitud:

  - `id`: (String) ID del administrador en la URL.
  - `idUser`: (String) ID del usuario a restaurar en la consulta.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos del usuario restaurado en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Lo sentimos no pudimos obtener el usuario"`

</details>

<details>
  <summary><strong>Actualizar estado de evento (eliminar evento) para el administrador</strong></summary>

Restaura un evento eliminado previamente de la plataforma NomadLocals para el rol de administrador.

- URL: `GET /admin/:id/eventreset`

- Parámetros de la solicitud:

  - `id`: (String) ID del administrador en la URL.
  - `idEvent`: (String) ID del evento a restaurar en la consulta.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos del evento restaurado en formato JSON

- Respuesta de error:

  - Código de estado: **404 Not Found**
  - JSON con el mensaje: `"error": "Lo sentimos no pudimos obtener el evento"`

</details>

## Rutas del Chat de Eventos

<details>
  <summary><strong>Crear un Nuevo Mensaje de Chat de Evento</strong></summary>

Crea un nuevo mensaje de chat para un evento específico en la plataforma NomadLocals.

- URL: `POST /:eventId/chat/event`

- Parámetros de la solicitud:

  - `eventId`: (String) ID del evento al que pertenece el chat.
  - Datos del mensaje de chat en el cuerpo de la solicitud:

    ```json
    {
      "userName": "Nombre del remitente",
      "senderId": "ID del remitente",
      "message": "Contenido del mensaje"
    }
    ```

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos del mensaje de chat creado en formato JSON

- Respuesta de error:

  - Código de estado: **500 Internal Server Error**
  - JSON con el mensaje: `"message": "Error al crear el chat de evento."`

</details>

<details>
  <summary><strong>Obtener Todos los Mensajes de Chat de Evento para un Evento Específico</strong></summary>

Obtiene todos los mensajes de chat registrados para un evento específico en la plataforma NomadLocals.

- URL: `GET /:eventId/chat/event`

- Parámetros de la solicitud:

  - `eventId`: (String) ID del evento.

- Respuesta exitosa:

  - Código de estado: **200 OK**
  - Datos de todos los mensajes de chat del evento en formato JSON

- Respuesta de error:

  - Código de estado: **500 Internal Server Error**
  - JSON con el mensaje: `"message": "Error al obtener los chats de evento."`

</details>

## Rutas del Chat Personal

<details>
  <summary><strong>Crear un Nuevo Chat Personal</strong></summary>

Crea un nuevo chat personal entre dos usuarios en la plataforma NomadLocals.

- **URL:** `POST /chat/personal`

- **Datos del chat personal en el cuerpo de la solicitud:**

  `json
{
  "senderId": "ID del remitente",
  "receiverId": "ID del receptor",
  "message": "Contenido del mensaje inicial"
}`

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **Datos del chat personal creado en formato JSON**

- **Respuesta de error:**

  - **Código de estado:** 500 Internal Server Error
  - **JSON con el mensaje:** `"message": "Error al crear el chat personal."`

</details>

<details>
  <summary><strong>Obtener Todos los Chats Personales Entre Dos Usuarios</strong></summary>

Obtiene todos los chats personales entre dos usuarios específicos.

- **URL:** `GET /chat/personal`

- **Parámetros de consulta:**

  - `senderId` (ID del remitente, obligatorio)
  - `receiverId` (ID del receptor, obligatorio)

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - Datos de todos los chats personales entre los usuarios en formato JSON

- **Respuesta de error:**

  - **Código de estado:** 500 Internal Server Error
  - **JSON con el mensaje:** `"message": "Error al obtener los chats personales."`

</details>

## Rutas Para El Reporte De Eventos

<details>
  <summary><strong>Reportar evento</strong></summary>

Crea un nuevo informe para un evento específico en la plataforma NomadLocals.

- **URL:** `POST /report-event`

- **Datos del informe de evento en el cuerpo de la solicitud:**

  `json
{
  "type": "Tipo del informe",
  "description": "Descripción del informe",
  "userNameUserReporter": "Nombre de usuario del informante",
  "idEventReporte": "ID del evento informado"
}`

- **Respuesta exitosa:**

- **Código de estado:** 200 OK
  Datos del informe de evento creado en formato JSON
- **Respuesta de error:**

- **Código de estado:** 404 Not Found
JSON con el mensaje de error
</details>

<details>
  <summary><strong>Obtener reporte por ID</strong></summary>
Obtiene un informe de evento específico por su ID.

- **URL**: GET /report-event/:id

- **Parámetros de consulta:**

  id (ID del informe de evento, obligatorio)

- **Respuesta exitosa:**

  **Código de estado:** 200 OK
  Datos del informe de evento en formato JSON

- **Respuesta de error:**

  **Código de estado:** 500 internal server error

- JSON con el mensaje de error
</details>
<details>
  <summary><strong>Eliminar reporte</strong></summary>

Elimina un informe de evento específico por su ID.

- **URL:** DELETE /report-event/delete/:id

- **Parámetros de la solicitud:**

id (ID del informe de evento a eliminar, obligatorio)

- **Respuesta exitosa:**

- **Código de estado:** 200 OK
- JSON con el mensaje de éxito
- **Respuesta de error:**

  **Código de estado:** 500 Internal Server Error
  JSON con el mensaje de error
  </details>

## Rutas de Informes de Usuarios

<details>
  <summary><strong>Crear un Nuevo Informe de Usuario</strong></summary>

Crea un nuevo informe para un usuario específico en la plataforma NomadLocals.

- **URL:** `POST /report-user`

- **Datos del informe de usuario en el cuerpo de la solicitud:**

  - `type`: Tipo del informe
  - `description`: Descripción del informe
  - `idUserReporter`: ID del usuario que realiza el informe
  - `idUserReporte`: ID del usuario informado

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **Datos del informe de usuario creado en formato JSON**

- **Respuesta de error:**
  - **Código de estado:** 404 Not Found
  - **JSON con el mensaje de error**

</details>

<details>
  <summary><strong>Obtener un Informe de Usuario por su ID</strong></summary>

Obtiene un informe de usuario específico por su ID.

- **URL:** `GET /report-user/:id`

- **Parámetros de la solicitud:**

  - `id`: ID del informe de usuario (obligatorio)

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **Datos del informe de usuario en formato JSON, incluyendo información del usuario que realizó el informe**

- **Respuesta de error:**
  - **Código de estado:** 404 Not Found
  - **JSON con el mensaje de error**

</details>

<details>
  <summary><strong>Eliminar un Informe de Usuario por su ID</strong></summary>

Elimina un informe de usuario específico por su ID.

- **URL:** `DELETE /report-user/delete/:id`

- **Parámetros de la solicitud:**

  - `id`: ID del informe de usuario a eliminar (obligatorio)

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **JSON con el mensaje de éxito**

- **Respuesta de error:**
  - **Código de estado:** 500 Internal Server Error
  - **JSON con el mensaje de error**

</details>

## Rutas de Revisiones de Eventos

<details>
  <summary><strong>Crear una Nueva Revisión de Evento</strong></summary>

Crea una nueva revisión para un evento específico en la plataforma NomadLocals.

- **URL:** `POST /review-event`

- **Datos de la revisión de evento en el cuerpo de la solicitud:**

  - `type`: Tipo de la revisión
  - `description`: Descripción de la revisión
  - `UserNameUserReview`: Nombre de usuario del revisor
  - `idEventReview`: ID del evento que se revisa
  - `score`: Puntuación de la revisión

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **Datos de la revisión de evento creada en formato JSON**

- **Respuesta de error:**
  - **Código de estado:** 404 Not Found
  - **JSON con el mensaje de error**

</details>

<details>
  <summary><strong>Obtener una Revisión de Evento por su ID</strong></summary>

Obtiene una revisión de evento específica por su ID.

- **URL:** `GET /review-event/:id`

- **Parámetros de la solicitud:**

  - `id`: ID de la revisión de evento (obligatorio)

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **Datos de la revisión de evento en formato JSON, incluyendo información del evento revisado**

- **Respuesta de error:**
  - **Código de estado:** 404 Not Found
  - **JSON con el mensaje de error**

</details>

<details>
  <summary><strong>Eliminar una Revisión de Evento por su ID</strong></summary>

Elimina una revisión de evento específica por su ID.

- **URL:** `DELETE /review-event/delete/:id`

- **Parámetros de la solicitud:**

  - `id`: ID de la revisión de evento a eliminar (obligatorio)

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **JSON con el mensaje de éxito**

- **Respuesta de error:**
  - **Código de estado:** 500 Internal Server Error
  - **JSON con el mensaje de error**

</details>

## Rutas de Revisiones de Usuarios

<details>
  <summary><strong>Crear una Nueva Revisión de Usuario</strong></summary>

Crea una nueva revisión para un usuario específico en la plataforma NomadLocals.

- **URL:** `POST /review-user`

- **Datos de la revisión de usuario en el cuerpo de la solicitud:**

  - `type`: Tipo de la revisión
  - `description`: Descripción de la revisión
  - `UserNameUserReview`: Nombre de usuario del revisor
  - `idUserReview`: ID del usuario que se revisa

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **Datos de la revisión de usuario creada en formato JSON**

- **Respuesta de error:**
  - **Código de estado:** 404 Not Found
  - **JSON con el mensaje de error**

</details>

<details>
  <summary><strong>Obtener Todas las Revisiones de Usuarios</strong></summary>

Obtiene todas las revisiones de usuarios registradas en la plataforma NomadLocals.

- **URL:** `GET /review-user`

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **Datos de todas las revisiones de usuarios en formato JSON**

- **Respuesta de error:**
  - **Código de estado:** 404 Not Found
  - **JSON con el mensaje de error**

</details>

<details>
  <summary><strong>Obtener una Revisión de Usuario por su ID</strong></summary>

Obtiene una revisión de usuario específica por su ID.

- **URL:** `GET /review-user/:id`

- **Parámetros de la solicitud:**

  - `id`: ID de la revisión de usuario (obligatorio)

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **Datos de la revisión de usuario en formato JSON**

- **Respuesta de error:**
  - **Código de estado:** 404 Not Found
  - **JSON con el mensaje de error**

</details>

<details>
  <summary><strong>Eliminar una Revisión de Usuario por su ID</strong></summary>

Elimina una revisión de usuario específica por su ID.

- **URL:** `DELETE /review-user/delete/:id`

- **Parámetros de la solicitud:**

  - `id`: ID de la revisión de usuario a eliminar (obligatorio)

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **JSON con el mensaje de éxito**

- **Respuesta de error:**
  - **Código de estado:** 500 Internal Server Error
  - **JSON con el mensaje de error**

</details>

## Ruta de Envío de Correo de Bienvenida

<details>
  <summary><strong>Enviar Correo de Bienvenida</strong></summary>

Envía un correo de bienvenida a un usuario recién registrado en la plataforma NomadLocals.

- **URL:** `POST /send-welcome-email`

- **Datos requeridos en el cuerpo de la solicitud:**

  - `email`: Dirección de correo electrónico del usuario (obligatorio)
  - `userName`: Nombre del usuario (obligatorio)

- **Respuesta exitosa:**

  - **Código de estado:** 200 OK
  - **Mensaje de éxito:** "Correo enviado"

- **Respuesta de error:**
  - **Código de estado:** 500 Internal Server Error
  - **Mensaje de error:** "Error al enviar el correo de bienvenida"

</details>