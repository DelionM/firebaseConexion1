<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenido 😋</title>
  <!-- este de abajo es el que manda a llamar el bootstrap desde la pagina oficial  -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="styles.css">
</head>

<body class="fondo d-flex align-items-center justify-content-center vh-100">
  <div class="container">
    <div class="card text-white  mx-auto" style="width: 18rem;">
      <h5 class="text-center">Actualizar Datos 😜 </h5>
      <label for="nombre" class="form-label">Actualizar nombre de usuario</label>
    <input type="input" placeholder="Actualizar Usuario" id="Nombre">
    <label for="nombre" class="form-label">Foto de perfil URL</label>
    <input type="input" placeholder="Ingresa URL de la foto " id="fotoUsuario">
     
      <br>
      <button type="button" class="btn btn-warning" id="guardar">Guardar Cambios</button>
    <br>
      <button type="button" class="btn btn-danger" id="cancelar">Cancelar</button>
    </div>
  </div>
</body>
<!-- estos dos fueron tomado de qui https://firebase.google.com/docs/web/modular-upgrade?hl=es#window-compat -->
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>
<!-- este de abajo es el que hace funcionar el jquery -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<!-- este de abajo es el que llama el archivo  -->
<script type="text/javascript" src="app.js"></script>
</html>