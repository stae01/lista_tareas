const boton = document.getElementById("agregar");

let tareas = [];

boton.onclick = function(){

    agregarTarea();

}

function agregarTarea(){

    let campo = document.getElementById("tarea");

    let tarea = campo.value;

    if (tarea === ""){
        alert("Campo vacío");
    }else{


        let lista = document.getElementById("lista_tareas");
        tareas.push(tarea);
        let li = document.createElement("li");

        li.innerHTML = tarea;

        let boton_eliminar = document.createElement("button");

        boton_eliminar.innerHTML = "Eliminar";

        boton_eliminar.classList.add("btn");
        boton_eliminar.classList.add("btn-danger");

        li.appendChild(boton_eliminar);

        //ELIMINA POR COMPLETO DE LA LISTA
        boton_eliminar.onclick = function(e) {
            e.stopPropagation();
            li.remove();
        }

        //TACHA el elemento
        li.onclick = function(){
            li.classList.toggle("tachado");
        }

        lista.appendChild(li);
        campo.value = "";


    }

}