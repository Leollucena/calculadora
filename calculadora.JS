function criaCalculadora() {
    return {  // Chave de abertura do objeto retornado
        display: document.querySelector('.display'),
        btnclear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
        },

        realizaconta(){
        let conta = this.display.value;

        try{
          conta= eval(conta);
          
          if(!conta){
            alert('conta inválida');
            return;
          }
          
           this.display.value = String(conta);
        } catch (e){
         alert('conta inválida');
         return;
        }
        },

        clearDisplay() {
            this.display.value = ' ';
        },

        apagaUm(){
            this, this.display.value = this.display.value.slice(0,-1);
        },

      
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaconta();
                }

        
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };  // Chave de fechamento do objeto retornado
}

const calculadora = criaCalculadora();
calculadora.inicia();
