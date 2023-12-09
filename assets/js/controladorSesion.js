const volver = () =>{
    window.location.href = '/index.html';
}

const volverRegistro = () =>{
    window.location.href = '/registro.html';
}

const login = async ()=>{
    const payload = {
        usuario : document.getElementById('usuario-input').value,
        contraseña: document.getElementById('contraseña-input').value
    } 

    console.log('login ',payload);

    const resultado = await fetch ('http://localhost:3003/usuarios/login',{
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(payload),
        method: 'POST'
    });

    const response = await resultado.json();

    if(!response || !response.status){
        alert("Usuario Inconrrecto");
        window.location.href = '/index.html';
    }else{
        localStorage.setItem("usuario", JSON.stringify(response.usuario));
        //redireccionar 
        window.location.href = '/principal.html';
    }
     
    console.log(response.usuario);


};