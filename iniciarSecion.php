<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Firebase</title>
  <!-- este de abajo es el que manda a llamar el bootstrap desde la pagina oficial  -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="styles.css">
</head>

<body class="fondo d-flex align-items-center justify-content-center vh-100">
  <div class="container">
    <div class="card text-white  mx-auto" style="width: 18rem;">
      <!-- <img src="assets/img/images.png" class="card-img-top" alt="..."> -->
      <h5 class="text-center">Iniciar Sesión</h5>

      <div class="card-body">
        <form>
          <form>
            <div class="mb-3">
              <label for="InputEmail" class="form-label">Email</label>
              <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Email">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="InputPassword1" placeholder="Contraseña">
            </div>
            <button type="button" class="btn btn-light" id="loginUsuario">Iniciar seción</button>
            <button type="button" class="btn btn-light" id="irRegistro">Regresar</button>

          </form>
        </form>
      </div>
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