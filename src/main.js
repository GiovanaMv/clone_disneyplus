document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');

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
});
