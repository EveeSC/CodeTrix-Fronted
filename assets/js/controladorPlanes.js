const planSeleccionado=(id_seleccionado)=>{
    const efectoSeleccionado = document.getElementById(id_seleccionado);
    const c1 = document.getElementById('contenedor1');
    const c2 = document.getElementById('contenedor2');
    const c3 = document.getElementById('contenedor3');

    if(id_seleccionado=='contenedor1'){
        efectoSeleccionado.classList.add('seleccionado');
        c2.classList.remove('seleccionado');
        c3.classList.remove('seleccionado');

    }else if(id_seleccionado=='contenedor2'){
        efectoSeleccionado.classList.add('seleccionado');
        c1.classList.remove('seleccionado');
        c3.classList.remove('seleccionado');
    }else{
        efectoSeleccionado.classList.add('seleccionado');
        c1.classList.remove('seleccionado');
        c2.classList.remove('seleccionado');
    }
    
}

const volver = () =>{
    window.location.href = '/index.html';
}

const volverRegistro = () =>{
    window.location.href = '/registro.html';
}