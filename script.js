/*
En DoctaDevs queremos lanzar un juego online. Pero antes necesitamos hacer
un módulo para gestionar los usuarios que pueden ingresar. Por ahora tenemos
algunos usuario que tenemos en un array de objetos.
1 - Por medio de un formulario registrar un usuario nuevo.
2 - Por medio un input o un select dentro de un formulario, eliminar un usuario.
3 - Crear un fomulario de login/ingreso para que los usuarios pueden ingresar al juego.
Si los datos son correctos mostrar un mensaje diciendo que ingresó correctamente o que los
datos son incorrectos.
OPCIONAL
4 - Crear un formulario para modificar los datos de los usuarios creados.
*/

let cuentas = [{
    usuario: 'lucho',
    email: 'lucho@doctadevs.com',
    password: 'irjksi123',
},
{
    usuario: 'cristian',
    email: 'cristian@doctadevs.com',
    password: 'erter1142',
},
{
    usuario: 'joey',
    email: 'joey@doctadevs.com',
    password: 'hfghftr324',
}
]
let $formRegistrar = document.querySelector('#registrarUsuario');
$formRegistrar.addEventListener('submit',function(e){
    e.preventDefault();
    let $nombre = document.querySelector('#usuario').value;
    let $email = document.querySelector('#email').value;
    let $password = document.querySelector('#contraseña').value;
    let usuario = {
        usuario: $nombre,
        email: $email,
        password: $password,
    };
    cuentas.push(usuario);
    let $msgRegistrar = document.querySelector('#mensaje');
    $msgRegistrar.innerHTML = 'El usuario se registro correctamente';
    $formRegistrar.reset();

    });

    let $formEliminar = document.querySelector('#eliminarUsuario');


    $formEliminar.addEventListener('submit',function(){
        let $eliNombre = document.querySelector('#eliNombre').value;
        let pos = cuentas.findIndex(function(cuenta){
        return cuenta.usuario === $eliNombre;
        });
        cuentas.splice(pos, 1);
        console.log(cuentas)

    });


let $formLogin = document.querySelector('#login');
let $msgLogin = document.querySelector('#msgLogin');
$formLogin.addEventListener('submit', function(e){
    e.preventDefault();

    let $loginUsuario = document.querySelector('#loginUsuario').value;
    let $loginEmail = document.querySelector('#loginEmail').value;
    let $loginContraseña = document.querySelector('#loginContraseña').value;

    let cuenta = cuentas.find(function (cuenta){
        return $loginUsuario == cuenta.usuario,
        $loginEmail == cuenta.email,
        $loginContraseña == cuenta.password;
    });
    if (cuenta == null){
        $msgLogin.innerHTML = 'Usuario y contraseña incorrectos';
    } else {
        $msgLogin.innerHTML = 'Usted ha ingresado correctamente';
    }
});
function crearSelect(){
    let nombresUsuarios = cuentas.map(function(cuenta){
        return cuenta.usuario
    });

    let $selectUsuario = document.querySelector('#selectUsuario');
        $selectUsuario.innerHTML = '<option value="">Seleccioná un Usuario</option>';
        nombresUsuarios.forEach(function(usuario){
        $option = document.createElement('option');
        $option.value = usuario;
        $option.innerHTML = usuario;

        $selectUsuario.appendChild($option);
    });
};
crearSelect();
let $formModificar = document.querySelector('#modificarUsuario');
let $msgModificar = document.querySelector('#msjModificar');

$formModificar.addEventListener('submit', function (e){
    e.preventDefault();
    let $usuario = document.querySelector('#selectUsuario').value;
    let $modUsuario = document.querySelector('#modUsuario').value;
    let $modEmail = document.querySelector('#modEmail').value;
    let $modPass = document.querySelector('#modContraseña').value;

    let posicionCuenta = cuentas.findIndex(function(cuenta){
        return $usuario == cuenta.usuario;
    });
    if($modUsuario != ''){
        cuentas[posicionCuenta].usuario = $modUsuario;
    }
    if($modEmail != ''){
        cuentas[posicionCuenta].email = $modEmail;
    }
    if($modPass != ''){
        cuentas[posicionCuenta].password = $modPass;
    }
    console.log(cuentas);
    $msgModificar.innerHTML = 'Los datos del usuario se modificaron con éxito';
    $formModificar.reset();
});
