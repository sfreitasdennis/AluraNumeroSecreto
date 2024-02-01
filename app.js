let listaNumerosSorteados=[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let quantidadeTenativas =1;

function montarTextosTelaInicial (tag, label){
    let campo = document.querySelector(tag);
    campo.innerHTML=label;
    responsiveVoice.speak(label,'Brazilian Portuguese Female',{rate:1.2});
    }
mensagemInicial();

function verificarChute() {

    let numeroInformado = document.querySelector('input').value;
    //let palavraTentativa = quantidadeTenativas>1 ? 'tentativas.':'tentativa.';
    let mensagemQuantidadeTentativasAcerto=`Você acertou o número secreto na ${quantidadeTenativas}º tentativa`;
    console.log(numeroInformado);
    console.log(numeroSecreto);

    if(numeroInformado == numeroSecreto){
        console.log('igauis')
        montarTextosTelaInicial ('h1', 'Acertou!')
        montarTextosTelaInicial ('p', mensagemQuantidadeTentativasAcerto)
        quantidadeTenativas=1;
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled',true);
   } else{
    if(numeroInformado > numeroSecreto) {
        montarTextosTelaInicial ('h1','Número secreto');
        montarTextosTelaInicial('p','O número secreto é menor que o valor informado.')
    }
    else{
        montarTextosTelaInicial ('h1','Número secreto');
        montarTextosTelaInicial('p','O número secreto é maior que o valor informado.')
    }
    quantidadeTenativas++
    limparCampo ();

   }
   
}

function gerarNumeroAleatorio() {
    let numeroGerado= parseInt(Math.random( ) * numeroLimite + 1);
    let qauntidadeElementosLista=listaNumerosSorteados.length;

    if(qauntidadeElementosLista==numeroLimite){
        listaNumerosSorteados=[]
    }
    console.log(qauntidadeElementosLista)
    if(listaNumerosSorteados.includes(numeroGerado)){
       return gerarNumeroAleatorio();
    }
    else{
            
    listaNumerosSorteados.push(numeroGerado);
    console.log(listaNumerosSorteados)
    return numeroGerado;
    }
}

function limparCampo(){
    numeroInformado=document.querySelector("input");
    numeroInformado.value='';
}

function reiniciarJogo() {
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    quantidadeTenativas=1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('chutar').removeAttribute('disabled');
    
}

function mensagemInicial (){
    montarTextosTelaInicial ('h1','Número secreto');
    montarTextosTelaInicial ('p',`Escolha um número entre 1 e ${numeroLimite}`);
}