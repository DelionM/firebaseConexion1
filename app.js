$(function () {
  console.log("jQuery funcionando 😎");
  var user;
  const firebaseConfig = {
    apiKey: "AIzaSyD7IKjXSZi_oZ0jTr2eVuqqU5ESgUgwkZM",
    authDomain: "logincloudesti-a2955.firebaseapp.com",
    projectId: "logincloudesti-a2955",
    storageBucket: "logincloudesti-a2955.appspot.com",
    messagingSenderId: "253449447512",
    appId: "1:253449447512:web:f0fb2114a281a12c37822d",
    measurementId: "G-K0E4LF5YHT",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);


     // *************************************************************************************************************


//  $("#cambiarPassword").click(function () {
//   console.log("preciono el boton de cambia passs");
//   location.href = "cambiarContraseña.php";

// });




 $("#cambiarPasswordHOLA").click(function () {
  location.href = "cambiarContraseña.php";
  console.log("Regresate a la seccion principal");
});


  //va a la segunda seccion para iniciar sesion
  $("#irALogin").click(function () {
    location.href = "iniciarSecion.php";
  });



  //Regreas a la seccion de inicio
  $("#irRegistro").click(function () {
    location.href = "index.php";
    console.log("Regresate a la seccion principal");
  });

  //Cerrar sesión
  $("#loginOut").click(function () {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      console.log("User Logged Out");
      location.href = "iniciarSecion.php";
    }).catch(function (error) {
      // An error happened.
      console.log(error);
    });
  });

    // **************************ACTUALIZAR DATOS - GUARDAR ***********************************************************************************


    $("#guardar").click(function (event) {
      // console.log("guardar");
      event.preventDefault();
    
      var Nombre = $('#Nombre').val();
      var fotoUsuario = $('#fotoUsuario').val();
    
      if (Nombre.length == 0) {
        console.log("No ingresó nombre");
      } else if (fotoUsuario.length == 0) {
        console.log("No ingresó URL de foto");
      } else {
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: $('#Nombre').val(),
          photoURL: $('#fotoUsuario').val()
        }).then(function () {
          console.log('Se ACTUALIZARON LOS DATOS CON ÉXITO');
          location.href = "home.PHP";
        }).catch(function (error) {
          console.error('Error al actualizar los datos: ', error);
        });
      }
    });
    

    // **************************ACTUALIZAR DATOS - cancelar ***********************************************************************************

  $("#cancelar").click(function () {
    console.log("cancelar");
    location.href = "home.php";
  });
 
  // *************************************************************************************************************

  $("#actualizar").click(function () {
    console.log("presionó el botón para actualizar datos 💎💎");
    location.href = "actualizarDatos.php";
     
    // user = firebase.auth().currentUser;
    // user.updateProfile({
    //     displayName: "Updated User's Name",
    //     photoURL: "https://example.com/[éSéô/profile.jpg"
    // }).then(function () {
    //     console.log('User Profile Updated Successfully');
    // }).catch(function (error) {
    //     // An error happened.
    //     console.error('Error updating user profile:', error);
    // });
 });

 
  
  // *******************CA,BIAR PASSWORD******************************************************************************************

 $("#guardarPassword").click(function () {
  console.log("presionó el botón de guardar cambios");
  
  var user = firebase.auth().currentUser;
  var newPassword = $('#Password1').val();
  var confirmPassword = $('#Password2').val();
  
  if (newPassword.length === 0) {
      console.log("No ingresó contraseña");
  } else if (confirmPassword.length === 0) {
      console.log("No ingresó nada en el campo de confirmación de contraseña");
  } else if (newPassword !== confirmPassword) {
      console.log("Las contraseñas no coinciden");
  } else {
      user.updatePassword(newPassword).then(function() {
          // Actualización exitosa
          console.log("se actualizo alv");
          location.href = "home.php"
      }).catch(function(error) {
          // Ocurrió un error
          console.error("Error al actualizar la contraseña: ", error);
      });
  }
 });




  
  // **************************CANCELAR CA,BIO PASSWORD*********************************


 $("#cancelarPassword").click(function () {
  location.href = "home.php";
 });
 

  // **************************confirmacion de correo electronico************🧧🧧🎑🎐🎏🎎🎞🎭🎋🎈🎈🎈🎈🎈🎈*********************



  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // El usuario está autenticado.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified; // Corregido aquí
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
  
      // Realiza acciones con la información del usuario autenticado
  
    } else {
      // El usuario no está autenticado. Realiza acciones correspondientes.
  
    }
  });
  









 // ************************************************************************************************************


    // se craea nuevo usuario
    $("#crearUsuario").click(function () {
      console.log("se presiono el b");
      let email = $("#InputEmail").val();
      let password1 = $("#InputPassword1").val(); //password with 6 chracters
      let password2 = $("#InputPassword2").val(); //password with 6 chracters
      if (email.length == 0) {
        console.log("no ingreso nada ");
      } else if (password1.length == 0) {
        console.log("no ingreso contraseña ");
      } else if (password2.length == 0) {
        console.log("no ingreso nada en la segunda de contraseña ");
      } else if (password1 != password2) {
        console.log("Las contraseñas no coinciden :v");
      } else {
        console.log("Creando usuario en firebase....." + email, "," + password1);

        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password1)
          .then((userCredential) => {
            // Signed in
            user = userCredential.user;
            console.log("Se creó el usuario en firebase con éxito");
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(
              "paso error :c: " + errorMessage + "error code" + errorCode
            );
            // ..
          });
      }
    });

    //iniciar sesion de usuario0
    $("#loginUsuario").click(function () {
      console.log("precionaste el inicio de sesión");
      let email = $("#InputEmail").val();
      let password = $("#InputPassword1").val(); //password with 6 chracters

      if (email.length == 0) {
        console.log("no ingreso nada ");
      } else if (password.length == 0) {
        console.log("no ingreso contraseña ");
      }
      // Inicio de sesion
      else
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            user = userCredential.user;
            // ...
            console.log("Iicio de sesion con exito ");
            location.href = "home.php";
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(
              "paso error en login :c: " + errorMessage + "error code" + errorCode
            );
          });
    });

    //realiza la coneccion de datos atraves de json o algo asi para mandar a la pantalla
    // ENVIA DATOS AL HOME ATRAVEZ DEL H4
    
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
    
        $("#userDetalles").html(`
        <img class="medium-size" src="${photoURL}" alt="User Photo">

          <h4 class="small">Id : ${uid}</h4>
          <h4 class="small">Nombre : ${displayName}</h4>
          <h4 class="small">Correo : ${email}</h4>
          <h4 class="small">Correo verificado: ${emailVerified}</h4>
          <h4 class="small">Es anónimo: ${isAnonymous}</h4>
          `);
    
      } else {
        // No user is signed in
        console.log("ERROR AL INICIAR");
      }
    });
    

    $("#userDetalles").html(`
    <h4>Usuario ${user.uid}</h4>
    <h4>Correo ${user.email}</h4>
    <h4>Nombre ${user.displayName}</h4>
    <h4>Id ${user.uid}</h4>
    `);



 




  });



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
