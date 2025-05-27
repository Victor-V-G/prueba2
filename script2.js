//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100

let personas = []

function validar(){
    let elementoNombre = document.getElementById("nombre")
    let valorIngresadoNombre = elementoNombre.value
    let elementoErrorNombre = document.getElementById("errorNombre")

    let elementoEdad = document.getElementById("edad")
    let valorIngresadoEdad = elementoEdad.value
    let elementoErrorEdad = document.getElementById("errorEdad")

    let vNombre = validarNombre(elementoNombre,valorIngresadoNombre,elementoErrorNombre)
    let vEdad = validarEdad(elementoEdad,valorIngresadoEdad,elementoErrorEdad)
    if  (vNombre == true && vEdad == true){
        let persona = {
            nombre : valorIngresadoNombre,
            edad : valorIngresadoEdad
        }
        personas.push(persona)
        elementoNombre.value = ""
        elementoEdad.value = ""
        cargarCuerpoTabla()
    }

}

function validarNombre(elemento,valorIngresado,elementoError){
    if (valorIngresado.length==0){
        alert("debes ingresar algo")
        elementoError.innerText = "debes ingresar algo"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
    else if(valorIngresado >= 0){
        alert("no se permiten numeros")
        elementoError.innerText = "no se permiten numeros"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
    else if(valorIngresado <= 0){
        alert("no se permiten numeros")
        elementoError.innerText = "no se permiten numeros"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
    else {
        alert("esta bueno")
        elementoError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        return true
    }
}

function validarEdad(elemento,valorIngresado,elementoError){
    if(valorIngresado.length==0){
        alert("debes ingresar algo")
        elementoError.innerText = "debes ingresar algo"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
    else if(valorIngresado >= 18 && valorIngresado < 100){
        alert("tiene la edad correcta")
        elementoError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        return true
    }
    else{
        alert("edad incorrecta, debes tener 18 años o mas")
        elementoError.innerText = "edad incorrecta, debes tener 18 años o mas"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
}

function cargarCuerpoTabla(){
    let cuerpoTabla = document.getElementById("cuerpoTabla")
    let personasMap = personas.map((p,index)=>{
        return "<tr><td>"+p.nombre+"</td>"+
                "<td>"+p.edad+"</td>"+
                "<td><button onclick='eliminar("+index+")'>Eliminar</button></td>"+
                "<td><button onclick='cargarDatos("+index+")'>Actualizar</button></td></tr>"
    })
    let personasStr = personasMap.join("")
    cuerpoTabla.innerHTML = personasStr
}

function eliminar(indice){
    let consultarUsuarioEliminacion = confirm("¿Usted desea eliminar esta persona?")

    if (consultarUsuarioEliminacion) {
        alert("Persona eliminada correctamente")
        personas = personas.filter((p,index)=>{
            if(index != indice){
                return p
            }
        })
        cargarCuerpoTabla()
    } 
    else {
        alert("Eliminación cancelada")
    }
}

function cargarDatos(indice){
    let elementoNombre = document.getElementById("nombre1")
    let elementoEdad = document.getElementById("edad1")
    
    let btnActualizar = document.getElementById("btnActualizar")
    btnActualizar.value = indice

    let persona = personas.filter((p,index)=>{
        if (index == indice){
            return p
        }
    })
    elementoNombre.value = persona[0].nombre
    elementoEdad.value = persona[0].edad
}

function actualizar(){
    let elementoNombre = document.getElementById("nombre1")
    let valorEditadoNombre = elementoNombre.value

    let elementoEdad = document.getElementById("edad1")
    let valorEditadoEdad = elementoEdad.value

    let btnActualizar = document.getElementById("btnActualizar")
    let indice = btnActualizar.value

    personas = personas.map((p,index)=>{
        if (index == indice){
            return {
                nombre : valorEditadoNombre,
                edad : valorEditadoEdad
            }
        }
        else {
            return p
        }
    })
    cargarCuerpoTabla()
}