openMenu.addEventListener ('click', () => {
    menu.style.display = 'flex'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    openMenu.style.display = 'none'

    setTimeout(() => {
        menu.style.opacity = '1'

        menu.style.right = '0'
    }, 10)

   })
   closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0'

    menu.style.right = (menu.offsetWidth *  -1) + 'px'
    setTimeout(() => {
        menu.removeAttribute=('style')
        openMenu.removeAttribute('style')
    }, 200)
      // Seleciona elementos do DOM
      const textoEditavel = document.getElementById('texto-editavel');
      const botaoSalvar = document.getElementById('botao-salvar');
      
  
      // Evento para habilitar a edição do texto
      botaoSalvar.addEventListener('click', salvarTexto, () => {
          textoEditavel.setAttribute('contenteditable', 'true');
          textoEditavel.focus(); // Coloca o foco no texto editável

          // funçao da aplicação
          function salvarTexto() {
            localStorage.setItem('textoSalvo', textoEditavel.innerText);
            alert('Texto salvo com sucesso!');
        }
            // Verifica se há um texto salvo no localStorage e carrega se existir
            if (localStorage.getItem('textoSalvo')) {
                textoEditavel.innerText = localStorage.getItem('textoSalvo');
            }        
      });
       // Evento para salvar o texto ao clicar no botão "Salvar"
      

   })
   
    