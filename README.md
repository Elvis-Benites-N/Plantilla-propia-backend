# Plantilla API GATEWAY

Proyecto desarrollado usando Nestjs. Api gateway principal, se comunica con los microservicios utilizando kafka para la gestión de peticiones. El ORM elegido para la persistencia de los datos es TypeORM.

## Configuración de despliegue

### Requisitos

- Instalar Docker
- Nestjs (8.2.8)


### Levantando el proyecto

Establecemos las variables de entorno de los diferentes servicios y backend principal en la carpeta env.

```
|- env
    |- backend.env

```

Levantamos el proyecto usando Docker Compose:

```
docker-compose up -d --build
```

## Anexo de variables de entorno

- Las url's no deben terminar con "/"
- Se utilizará la variable "CONTEXT" y no "CONTEXTO"

### ENV principal

<table style="width:100%">
  <tr>
    <th>Clave</th>
    <th>Descripcion</th>
    <th>Ejemplo</th>
  </tr>
  <tr>
    <td>PORT</td>
    <td>Puerto donde se va a servir la aplicación</td>
    <td>8080</td>
  </tr>
  <tr>
    <td>CONTEXT</td>
    <td>Prefijo global de las rutas de la aplicación</td>
    <td>/contexto/api-gateway</td>
  </tr>
  <tr>
    <td>CODIGO_APP</td>
    <td>Identificador de la aplicación proporcionada por el SCA</td>
    <td>009</td>
  </tr>
  <tr>
    <td>JWT_ACCESS_KEY </td>
    <td>Llave de acceso de jwt proporcionada por el SCA</td>
    <td>jTshR</td>
  </tr>
  <tr>
    <td>JWT_REFRESH_KEY</td>
    <td>Llave para refrescar el token proporcionada por el SCA</td>
    <td>PiTvvh5U2a</td>
  </tr>
  <tr>
    <td>COOKIE_USE_SECURE</td>
    <td>Booleano que indica uso de protocolo seguro.<br>Valores posibles: true | false </td>
    <td>true</td>
  </tr>
  <tr>
    <td>FRONTEND_URL</td>
    <td>URL del frontend</td>
    <td>http://localhost:9988</td>
  </tr>
  <tr>
    <td>KAFKA_BROKER</td>
    <td>Host del broker de kafka</td>
    <td>host.docker.internal:8888</td>
  </tr>
  <tr>
    <td>KAFKAJS_NO_PARTITIONER_WARNING</td>
    <td>Silenciador de warning(Opcional)</td>
    <td>1</td>
  </tr>
  <tr>
    <td>HEALTH_USERNAME</td>
    <td>Usuario para poder consumir el endpoint de salud</td>
    <td>admin</td>
  </tr>
  <tr>
    <td>HEALTH_PASSWORD</td>
    <td>Contraseña para poder consumir el endpoint de salud</td>
    <td>admin</td>
  </tr>
  <tr>
    <td>MODE_ENV</td>
    <td>Modo de ambiente del api: dev | prod</td>
    <td>prod</td>
  </tr>
</table>
