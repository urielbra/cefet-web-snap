const checkBoxMarcacoes = document.querySelector('#visibilidade-das-marcacoes');
checkBoxMarcacoes.addEventListener('change', (e) => {
    document.body.classList.toggle(e.currentTarget.value)
});

const x_el =  document.querySelector('#x-da-marcacao');
const y_el =  document.querySelector('#y-da-marcacao');
const largura_el =  document.querySelector('#largura-da-marcacao');
const altura_el =  document.querySelector('#altura-da-marcacao');

const titulo_el = document.querySelector('#titulo-da-marcacao');
const conteudo_el = document.querySelector('#conteudo-da-marcacao');
const cor_el = document.querySelector('#cor-da-marcacao');

const className = 'selecionada';

let marcacaoSelecionada = document.querySelector('.marcacao.selecionada');



const selectedToControls =  (el) => {

    const clickedEl = el.currentTarget;
    const selectedEl = document.querySelector( '.' + className);

    if(selectedEl){
        selectedEl.classList.remove(className);
    }
    clickedEl.classList.add(className);
    marcacaoSelecionada = clickedEl;
   
    x_el.value  = parseFloat(clickedEl.style.left);
    y_el.value  = parseFloat(clickedEl.style.top);
    largura_el.value  = parseFloat(clickedEl.style.width);
    altura_el.value  = parseFloat(clickedEl.style.height);

    titulo_el.value =  clickedEl.dataset.titulo;
    conteudo_el.value =  clickedEl.dataset.conteudo;
    cor_el.value =  clickedEl.dataset.cor;
    


    const radioEl = (document.querySelector(`[name="formato-da-marcacao"][value=${clickedEl.dataset.formato}]`));
    if(radioEl){
        radioEl.checked = true;
    }
    
}

marcacoes.forEach(el => {
    el.addEventListener('click', selectedToControls);
});


const inputs = document.querySelectorAll('input, textarea');

const controlsToSelected = (el) => {

    marcacaoSelecionada.style.left = x_el.value + 'px';
    marcacaoSelecionada.style.top = y_el.value + 'px';
    marcacaoSelecionada.style.width = largura_el.value + 'px';
    marcacaoSelecionada.style.height = altura_el.value + 'px';
    marcacaoSelecionada.dataset.titulo = titulo_el.value;
    marcacaoSelecionada.dataset.conteudo = conteudo_el .value;
    marcacaoSelecionada.dataset.cor = cor_el.value;
    console.log('oi')
    marcacaoSelecionada.dataset.formato = document.querySelector(`[name="formato-da-marcacao"]:checked`).value;
   
}

inputs.forEach(el => {
    el.addEventListener('input', controlsToSelected);


    // marcacaoSelecionada.dataset.formato = 
});