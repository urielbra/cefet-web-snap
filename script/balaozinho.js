const marcacoes = document.querySelectorAll('.marcacao');
const balaozinhoEl = document.querySelector('#balaozinho');
marcacoes.forEach(el => {
    el.addEventListener('mouseover', el => {
        const titulo = el.target.dataset.titulo;
        const conteudo = el.target.dataset.conteudo;
        const cor = el.target.dataset.cor;

        
        balaozinhoEl.innerHTML =  `
        <h2>${titulo}</h2>
        <p>${conteudo}</p
        `;
        balaozinhoEl.style.color = cor;

    });
    el.addEventListener('mouseout', () => {
        

        balaozinhoEl.innerHTML =  ``
       
    });
    el.addEventListener('mousemove', el => {
        balaozinhoEl.style.top = `${el.pageY}px`;
        balaozinhoEl.style.left = `${el.pageX}px`;
    })
})

