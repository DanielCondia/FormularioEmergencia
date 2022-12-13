/** 
 * clase de la perosna
 * @classpersona Van los nombres @constructor van nombres apellidos y doc identidad del paciente.
 * 
 */
class persona{
    constructor(nombre, apellido,id){
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
    }
}
/**
 * clase de atención
 * @classatencion van los tipos de atención segun la gravedad.
 */
class atencion{
    constructor(rojo, naranja, amarillo, verde, azul){
        this.rojo = "Atención de forma inmediata"
        this.naranja = "10-15 Minutos"
        this.amarillo = "60 minutos"
        this.verde = "2 Horas"
        this.azul = "4 Horas"
    }
}
/**
 * @functionevaluar Función principal
 */
function evaluar(rojo, naranja, amarillo, verde, azul){
    //Traemos el nombre de la persona
    var nombre = document.getElementById("inputNombre").value;
    //Traemos el apellido de la persona
    var apellido = document.getElementById("inputApellidos").value;
    //Traemos el id de la persona
    var id = parseInt(document.getElementById("inputNumDoc").value);
    //Traemos las observaciones de la urgencia
    var observaciones = document.getElementById("textObservaciones").value;
    //Checkamos el tipo de emergencia, que tan grabe es y llamamos funciones
    if(document.getElementById("nivelEmergencia1").checked){
        document.getElementById("advertencia3").innerHTML = "";
        emergencia1(nombre,apellido,id,rojo,observaciones);
    }
    else if(document.getElementById("nivelEmergencia2").checked){
        document.getElementById("advertencia3").innerHTML = "";
        emergencia2(nombre, apellido, id, naranja, observaciones);
    }
    else if(document.getElementById("nivelEmergencia3").checked){
        document.getElementById("advertencia3").innerHTML = "";
        emergencia3(nombre, apellido, id, amarillo, observaciones);
    }
    else if(document.getElementById("nivelEmergencia4").checked){
        document.getElementById("advertencia3").innerHTML = "";
        emergencia4(nombre, apellido, id, verde, observaciones);
    }
    else if(document.getElementById("nivelEmergencia5").checked){
        document.getElementById("advertencia3").innerHTML = "";
        emergencia5(nombre, apellido, id, azul, observaciones);
    }
    else{
        document.getElementById("advertencia3").innerHTML = "Favor elija un tipo de emergencia";
    }
    
    //Creamos Codigo personal
    var letrasNombre = [];
    for (let index = 0; index < 2; index++) {
        letrasNombre.push(nombre[index].toUpperCase());
    }
    var cleanName = letrasNombre.join('');
    var letrasApellido = [];
    let i = apellido.length;
    control = 0;
    while(control < apellido.length){
        if(letrasApellido.length == 2){
            break;
        }
        i--;
        letrasApellido.push(apellido[i]);
        control++;
    }
    let primeraLetraApellido = letrasApellido[1];
    let segundaLetraApellido = letrasApellido[0];
    let cleanLastName = primeraLetraApellido.toUpperCase() + segundaLetraApellido.toUpperCase();
    if(document.getElementById("tipoDocRC").checked){
        let tipoDoc = "RC";
        var codigo = tipoDoc + id + cleanName + cleanLastName;
        document.getElementById("outputCodigoPersonal").innerHTML = "<label><strong>Código personal:</strong></label>" + codigo;
    }
    else if(document.getElementById("tipoDocTI").checked){
        let tipoDoc = "TI";
        var codigo = tipoDoc + id + cleanName + cleanLastName;
        document.getElementById("outputCodigoPersonal").innerHTML = "<label><strong>Código personal:</strong></label>" + codigo;
    }
    else if(document.getElementById("tipoDocCC").checked){
        let tipoDoc = "CC";
        var codigo = tipoDoc + id + cleanName + cleanLastName;
        document.getElementById("outputCodigoPersonal").innerHTML = "<label><strong>Código personal:</strong></label>" + codigo;
    }
    else if(document.getElementById("tipoDocCE").checked){
        let tipoDoc = "CE";
        var codigo = tipoDoc + id + cleanName + cleanLastName;
        document.getElementById("outputCodigoPersonal").innerHTML = "<label><strong>Código personal:</strong></label>" + codigo;
    }
    else if(document.getElementById("tipoDocPA").checked){
        let tipoDoc = "PA";
        var codigo = tipoDoc + id + cleanName + cleanLastName;
        document.getElementById("outputCodigoPersonal").innerHTML = "<label><strong>Código personal:</strong></label>" + codigo;
    }
}

/**
 * 
 * @param {Nombreusuario} nombre 
 * @param {ApellidoUsuario} apellido 
 * @param {IDUsuario} id 
 * @param {EmergenciaNivel1} rojo 
 * @param {ObservacionesEmergencia} observaciones
 */
function emergencia1(nombre,apellido,id,rojo,observaciones){
    //Evaluamos el tipo de documento
    if(document.getElementById("tipoDocRC").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel rojo
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(rojo);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento rc:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Resucitación:</strong> ${Atencion.rojo}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
            
        }
    }
    else if(document.getElementById("tipoDocTI").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel rojo
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(rojo);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento ti:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Resucitación:</strong> ${Atencion.rojo}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }     
    }
    else if(document.getElementById("tipoDocCC").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel rojo
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(rojo);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento cc:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Resucitación:</strong> ${Atencion.rojo}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }  
    }
    else if(document.getElementById("tipoDocCE").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel rojo
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(rojo);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento ce:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Resucitación:</strong> ${Atencion.rojo}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }   
    }
    else if(document.getElementById("tipoDocPA").checked){
         //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
         if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel rojo
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(rojo);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento pa:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Resucitación:</strong> ${Atencion.rojo}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }   
    }
    else{
        document.getElementById("advertencia2").innerHTML = "Favor ingrese una opción correcta";
    }
}

/**
 * 
 * @param {Nombreusuario} nombre 
 * @param {ApellidoUsuario} apellido 
 * @param {IDUsuario} id 
 * @param {EmergenciaNivel2} naranja 
 * @param {ObservacionesEmergencia} observaciones 
 */
function emergencia2(nombre, apellido, id, naranja, observaciones){
     //Evaluamos el tipo de documento
     if(document.getElementById("tipoDocRC").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel naranja
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(naranja);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento rc:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Emergencia:</strong> ${Atencion.naranja}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
            
        }
    }
    else if(document.getElementById("tipoDocTI").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel naranja
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(naranja);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento ti:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Emergencia:</strong> ${Atencion.naranja}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }     
    }
    else if(document.getElementById("tipoDocCC").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel naranja
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(naranja);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento cc:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Emergencia:</strong> ${Atencion.naranja}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }  
    }
    else if(document.getElementById("tipoDocCE").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel naranja
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(naranja);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento ce:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Emergencia:</strong> ${Atencion.naranja}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }   
    }
    else if(document.getElementById("tipoDocPA").checked){
         //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
         if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel naranja
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(naranja);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento pa:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Emergencia:</strong> ${Atencion.naranja}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }   
    }
    else{
        document.getElementById("advertencia2").innerHTML = "Favor ingrese una opción correcta";
    }
}

/**
 * 
 * @param {NombreUsuario} nombre 
 * @param {ApellidoUsuario} apellido 
 * @param {IDUsuario} id 
 * @param {EmergenciaNivel3} amarillo 
 * @param {ObservacionesEmergencia} observaciones 
 */
function  emergencia3(nombre, apellido, id, amarillo, observaciones){
     //Evaluamos el tipo de documento
     if(document.getElementById("tipoDocRC").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel amarillo
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(amarillo);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento rc:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Urgencias:</strong> ${Atencion.amarillo}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
            
        }
    }
    else if(document.getElementById("tipoDocTI").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel amarillo
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(amarillo);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento ti:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Urgencias:</strong> ${Atencion.amarillo}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }     
    }
    else if(document.getElementById("tipoDocCC").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel amarillo
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(amarillo);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento cc:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Urgencias:</strong> ${Atencion.amarillo}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }  
    }
    else if(document.getElementById("tipoDocCE").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel amarillo
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(amarillo);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento ce:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Urgencias:</strong> ${Atencion.amarillo}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }   
    }
    else if(document.getElementById("tipoDocPA").checked){
         //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
         if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel amarillo
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(amarillo);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento pa:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Urgencias:</strong> ${Atencion.amarillo}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }   
    }
    else{
        document.getElementById("advertencia2").innerHTML = "Favor ingrese una opción correcta";
    }
}

/**
 * 
 * @param {NombreUsuario} nombre 
 * @param {ApellidoUsuario} apellido 
 * @param {IDUsuario} id 
 * @param {EmergenciaNivel4} verde 
 * @param {ObservacionesEmergencia} observaciones 
 */
function  emergencia4(nombre, apellido, id, verde, observaciones){
     //Evaluamos el tipo de documento
     if(document.getElementById("tipoDocRC").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel verde
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(verde);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento rc:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Urgencia menor:</strong> ${Atencion.verde}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
            
        }
    }
    else if(document.getElementById("tipoDocTI").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel verde
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(verde);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento ti:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Urgencia menor:</strong> ${Atencion.verde}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }     
    }
    else if(document.getElementById("tipoDocCC").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel verde
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(verde);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento cc:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Urgencia menor:</strong> ${Atencion.verde}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }  
    }
    else if(document.getElementById("tipoDocCE").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel verde
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(verde);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento ce:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Urgencia menor:</strong> ${Atencion.verde}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }   
    }
    else if(document.getElementById("tipoDocPA").checked){
         //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
         if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel verde
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(verde);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento pa:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Urgencia menor:</strong> ${Atencion.verde}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }   
    }
    else{
        document.getElementById("advertencia2").innerHTML = "Favor ingrese una opción correcta";
    }
}

/**
 * 
 * @param {NombreUsuario} nombre 
 * @param {ApellidoUsuario} apellido 
 * @param {IDUsuario} id 
 * @param {EmergenciaNivel5} azul 
 * @param {ObservaconesEmergencia} observaciones 
 */
function emergencia5(nombre, apellido, id, azul, observaciones){
     //Evaluamos el tipo de documento
     if(document.getElementById("tipoDocRC").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel azul
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(azul);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento rc:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Sin Urgencia:</strong> ${Atencion.azul}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
            
        }
    }
    else if(document.getElementById("tipoDocTI").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel azul
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(azul);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento ti:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Sin Urgencia:</strong> ${Atencion.azul}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }     
    }
    else if(document.getElementById("tipoDocCC").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel azul
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(azul);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento cc:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Sin Urgencia:</strong> ${Atencion.azul}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }  
    }
    else if(document.getElementById("tipoDocCE").checked){
        //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
        if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel azul
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(azul);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento ce:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Sin Urgencia:</strong> ${Atencion.azul}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }   
    }
    else if(document.getElementById("tipoDocPA").checked){
         //Si el número de documento es menor de 7 digitos nos manda un mensaje de error
         if(id.toString().length < 7){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        //Si el número de documento es mayor de 10 digitos nos manda un mensaje de error
        else if(id.toString().length > 10){
            document.getElementById("advertencia").innerHTML = "Error favor ingresar un número valido"
        }
        else{
            /* 
            Si los digitos estan dentro del rango correcto, nos vacia el parrafo de advertencia y nos coloca 
            todos los resultados correctos
        */
            document.getElementById("advertencia").innerHTML = "";
            /* 
                traemos las clases de persona y el nivel de atención de la emergencia nivel azul
            */
            const Persona = new persona(nombre, apellido,id);
            const Atencion = new atencion(azul);
            document.getElementById("advertencia2").innerHTML = "";
            document.getElementById("seccionResultadosPersona").innerHTML = ` <strong>Nombre:</strong> ${Persona.nombre} ${Persona.apellido} <br><br> <strong>documento pa:</strong> ${Persona.id}`.toUpperCase();
            document.getElementById("seccionResultadosEmergencia").innerHTML = `<br> <strong>Sin Urgencia:</strong> ${Atencion.azul}`.toUpperCase();
            document.getElementById("seccionResultadosObservaciones").innerHTML = observaciones.toUpperCase();
        }   
    }
    else{
        document.getElementById("advertencia2").innerHTML = "Favor ingrese una opción correcta";
    }
}