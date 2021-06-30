const filtroSelectEl  = document.querySelector('#filtro-da-foto');
const fotoEl = document.querySelector('.foto-anotada > img');

filtroSelectEl.addEventListener('input', (el) => {
    const value = el.currentTarget.value;
    fotoEl.style.filter = value;
});

const imagemInputEl  = document.querySelector('#imagem');
const imagem = document.querySelector('.foto-anotada > img');


function readImage(file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imagem.src = event.target.result;
    });
    reader.readAsDataURL(file);
}

imagemInputEl.addEventListener('input', (el) => {
    readImage(el.target.files[0]);
});
