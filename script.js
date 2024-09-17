const caixaPrincipal=document. querySelector(".caixa-principal")
const caixaPerguntas=document.querySelector(".caixa-perguntas")
const caixaAlternativas=document.querySelector("caixa-alterntivas")
const caixaResultado=docment.querySelector(".caixa-resultado")
const textoResultado=docment.querySelector(".caixa-resultado")

const perguntas = [
    {
        enunciado: "Qual metodo de cozimento e mais eficaz para manter os nutrientes dos vegetais? ",
        alternativas:[
            {
                texto: "A) Acozimento a vapor",
                afirmacao: "Afirmação 1a alternativa"
            },
            {
                texto: "B) fritura",
                afirmacao: "Afirmação 2a alternativa"
               
            },
        ]
    },
    
    {
        enunciado: "Qual tipo de carboidrato é geralmente mais benéfico para a energia sustentada??",
        alternativas:[
            {
                texto: "A)carboidratos complexo",
                afirmacao: "Afirmação 1a alternativa"
               
            },
            {
                texto: "B)carboidrato simples",
                afirmacao: "Afirmação 2a alternativa"
               
            },
        ]
    },
    
    {
        enunciado: "Qual bebida e geralmente considerada para melhor hidrataçao durante o exercicio fisico?",
        alternativas:[
            {
                texto: "A)agua",
                afirmacao: "Afirmação 1a alternativa"          
               
            },
            {
                texto: "B)bebidas esportivas",
                afirmacao: "Afirmação 2a alternativa"
               
            },
        ]
    },

    {
        enunciado: "Qual o tipo de gordura geralmente considerado mais saudavel para o coraçao?",
        alternativas:[
            {
                texto: "A)gordura insaturadas",
                afirmacao: "Afirmação 1a alternativa"          
               
            },
            {
                texto: "B)gordura saturadas",
                afirmacao: "Afirmação 2a alternativa"
               
            },
        ]
    },

    {
        enunciado: "qual metodo de preparo e geralmente mais saudavel para o consumo de carnes?",
        alternativas:[
            {
                texto: "A)grelharS",
                afirmacao: "Afirmação 1a alternativa"          
               
            },
            {
                texto: "B)fritar",
                afirmacao: "Afirmação 2a alternativa"
               
            },
        ]
    },
]
    
    let atual = 0;
    let perguntaAtual;
    function mostraPergunta(){
        caixaAlternativas.textContent="";
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntas[atual].enunciado;
        mostraAlternativas();
    }
    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", function(){
                atual++;
                mostraPergunta();
            });        
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }
    mostraPergunta();