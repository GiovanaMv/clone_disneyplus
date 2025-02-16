document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const herosection = document.querySelector('.hero');
    const alturaHero = herosection.clientHeight;

    window.addEventListener('scroll', function(){
        const posiAtual = window.scrollY;

        if(posiAtual < alturaHero){
            ocultaElementHeader();
        } else {
            exibeElementHeader();
        }
    });
    function ocultaElementHeader(){
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }
    function exibeElementHeader(){
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }


    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = button.dataset.tabButton;

            // 1️⃣ Remover classe ativa de todas as listas
            tabs.forEach(tab => {
                tab.classList.remove('shows__list--is-active');
            });

            // 2️⃣ Adicionar classe ativa à lista correspondente
            const activeTab = document.querySelector(`[data-tab-id="${targetTab}"]`);
            if (activeTab) {
                activeTab.classList.add('shows__list--is-active');
            }

            // 3️⃣ Remover classe ativa dos botões
            buttons.forEach(btn => {
                btn.classList.remove('shows__tabs__button--is-active');
            });

            // 4️⃣ Adicionar classe ativa ao botão clicado
            button.classList.add('shows__tabs__button--is-active');
        });
    });
    for (let i = 0; i < questions.length; i++){
        questions [i].addEventListener('click', abreOuFechaResposta);
    }

})

    function abreOuFechaResposta(elemento){
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;

        elementoPai.classList.toggle(classe);
    }
