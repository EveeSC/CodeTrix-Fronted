function actualizarResultado() {
    const codigoHTML = document.getElementById('html').value;
    const codigoCSS = document.getElementById('css').value;
    const codigoJS = document.getElementById('js').value;

    const resultado = document.getElementById('resultado').contentWindow.document;
    resultado.open();
    resultado.write(`
      <style>${codigoCSS}</style>
      ${codigoHTML}
      <script>${codigoJS}</script>
    `);
    resultado.close();

    console.log("codigo html: ",codigoHTML, "codigo css: ", codigoCSS,"codigo js: ", codigoJS);
  }

  const principal =()=>{
    window.location.href = '/principal.html';
  }

document.addEventListener("DOMContentLoaded", function() {
  Prism.highlightAll();
});
