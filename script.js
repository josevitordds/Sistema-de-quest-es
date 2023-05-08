var a = "Henrique pensou em um número, multiplicou por 3, somou 3, dividiu por 3, subtraiu 3, calculou a raiz cúbica e obteve como resultado final. Qual é a soma dos algarismos do número em que Henrique pensou?";
var b = "Os números x e y são tais que 80% de x é igual a 20% de y. Qual das igualdades abaixo é verdadeira?";
var c = "A professora Brenda aplicou uma prova para 25 estudantes e cometeu um erro ao escrever a nota da aluna Aline, registrando 3,6 ao invés de 8,6. Com esse erro, a média das notas foi 7,2. Qual passou a ser a média das notas depois de corrigido esse erro?";
var d = "A travessia de um deserto dura seis dias, e uma pessoa consegue carregar comida e água para apenas quatro dias. Omar quer atravessar esse deserto com a ajuda de alguns amigos, que podem lhe dar parte de seus suprimentos e retornar ao ponto de partida. Qual é a quantidade mínima de amigos que devem iniciar a travessia com Omar, para que ele consiga atravessar o deserto e seus amigos retornem ao ponto de partida?";
var e = ('Uma fábrica recebeu uma encomenda de 100kg de bombons para entregar em 10 dias. Após 5 dias, seus 3 funcionários produziram 20kg de bombons. No mínimo, quantos funcionários extras a fábrica precisa contratar para atender a encomenda no prazo, supondo-se que todos os funcionários tenham a mesma produção diária?');
var f = "Admita que sejam válidas ambas as seguintes sentenças <br><br>° Pinóquio sempre mente <br> °Pinóquio diz: Todos os meus chapéus são verdes <br><br> Podemos concluir dessas duas sentenças que:";
var g = "Um professor de educação física precisou escolher, dentre seus alunos, uma equipe formada por dois meninos e uma menina ou por duas meninas e um menino. Ele observou que poderia fazer essa escolha de 25 maneiras diferentes. Quantos meninos e meninas são alunos desse professor?";
var h = "Um fabricante diminuiu a quantidade de chocolate em uma caixa de 250g para 200g, mantendo o preço da caixa. Qual foi o aumento percentual do preço do grama do chocolate??";
var i = "Em uma escola foram criados três clubes distintos com 15 alunos cada. Nenhum aluno participa de três clubes, mas os alunos podem participar de mais de um clube. Quantos alunos, no mínimo, participam desses clubes?"
var j = "Sejam a e b inteiros positivos tais que a+2 é mútiplo de b e b+2 é mútiplo de a. Qual é o maior valor possível para a+b?"

let ba = document.querySelector("#qa");
let bb = document.querySelector("#qb");
let bc = document.querySelector("#qc");
let bd = document.querySelector("#qd");
let be = document.querySelector("#qe");







let array = [
    b, c, d, e, f, g, h, i, j

];
let usedElements = [];
const spanResult = document.querySelector("#resultado");
const spanQA = document.querySelector("#AA")
const spanQB = document.querySelector("#AB");
const spanQC = document.querySelector("#AC");
const spanQD = document.querySelector("#AD");
const spanQE = document.querySelector("#AE");
const spanScore = document.querySelector("#score");
const spanAviso =  document.querySelector(".bloco-aviso");
const textAviso = document.querySelector("#aviso-text");
const containerSolution = document.querySelector(".container-solucao");
const spanSolution = document.querySelector("#textSolution");
const spanNome = document.querySelector("#spanNome");
let imageQuest = document.querySelector('.img-solution')





function showSolution(){
    containerSolution.style.display='block'
}
function closeSolution(){
    containerSolution.style.display='none'

}
function doLogin(){
    document.querySelector(".container-login").style.display="none";
    const nome = document.querySelector("#nome").value;
    spanNome.innerHTML=(nome);
    
}
function getRandomElement() {
    if (array.length === usedElements.length) {
        alert("Parabéns! Todas as questões foram resolvidas.");
        return;
    }
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = array[randomIndex];
    while (usedElements.includes(randomElement)) {
        randomIndex = Math.floor(Math.random() * array.length);
        randomElement = array[randomIndex];
    }
    usedElements.push(randomElement);
    spanResult.innerHTML = (randomElement);
    spanScore.innerHTML=(scoreDate+"/10")

    

    if(randomElement == a){
        spanQA.innerHTML="10"

    }else if(randomElement== b){
        spanQA.innerHTML="x=4y"
        spanQB.innerHTML="2x=3y"
        spanQC.innerHTML="x=8y"
        spanQD.innerHTML="3x=2y"
        spanQE.innerHTML="4x=y"
        spanSolution.textContent=' A turma tem 25 alunos. Portanto, para calcular a média das notas, podemos dividir a nota de cada aluno por 25 e somar os resultados. O erro da professora foi de 8,6 - 3,6 = 5,0 pontos. Dividindo o erro por 25, encontramos  0,2. Esse valor deve ser somado à média original, obtendo-se o valor 7,2 + 0,2 =7,4.'
     
    }else if(randomElement== c){
        spanQA.innerHTML="7,3"
        spanQB.innerHTML="7,4"
        spanQC.innerHTML="7,45"
        spanQD.innerHTML="7,5"
        spanQE.innerHTML="7,6"
        spanSolution.textContent=' A turma tem 25 alunos. Portanto, para calcular a média das notas, podemos dividir a nota de cada aluno por 25 e somar os resultados. O erro da professora foi de 8,6 - 3,6 = 5,0 pontos. Dividindo o erro por 25, encontramos  0,2. Esse valor deve ser somado à média original, obtendo-se o valor 7,2 + 0,2 =7,4.'
    }else if(randomElement== d){
        spanQA.innerHTML="1"
        spanQB.innerHTML="2"
        spanQC.innerHTML="3"
        spanQD.innerHTML="4"
        spanQE.innerHTML="5"
        spanSolution.textContent='5'
    }else if(randomElement== e){
        spanQA.innerHTML="5"
        spanQB.innerHTML="7"
        spanQC.innerHTML="8"
        spanQD.innerHTML="9"
        spanQE.innerHTML="12"
        spanSolution.textContent='1+6=7'
    }else if(randomElement== f){
        spanQA.innerHTML="Pinóquio tem pelo menos um chapéu."
        spanQB.innerHTML="Pinóquio tem apenas um chapéu verde."
        spanQC.innerHTML="Pinóquio não tem chapéus."
        spanQD.innerHTML="Pinóquio não tem chapéus verdes."
        spanQE.innerHTML="Pinóquio não tem chapéus verdes"
        spanSolution.textContent='1+7=8'
    }else if(randomElement== g){
        spanQA.innerHTML="5"
        spanQB.innerHTML="7"
        spanQC.innerHTML="9"
        spanQD.innerHTML="10"
        spanQE.innerHTML="25"
        spanSolution.textContent='1+8=9'
    }else if(randomElement== h){
        spanQA.innerHTML="5%"
        spanQB.innerHTML="10%"
        spanQC.innerHTML="15%"
        spanQD.innerHTML="20%"
        spanQE.innerHTML="25%"
        spanSolution.textContent='1+9=10'
    }else if(randomElement== i){
        spanQA.innerHTML="23"
        spanQB.innerHTML="24"
        spanQC.innerHTML="25"
        spanQD.innerHTML="26"
        spanQE.innerHTML="27"
        spanSolution.textContent='1+9=10'
    }else if(randomElement== j){
        spanQA.innerHTML="2"
        spanQB.innerHTML="4"
        spanQC.innerHTML="6"
        spanQD.innerHTML="10"
        spanQE.innerHTML="14"
        spanSolution.textContent='1+9=10'
    }

   spanAviso.style.opacity='0';
   spanAviso.style.backgroundColor='firebrick';
   textAviso.textContent='Você infelizmente errou a questão'




    




}
spanResult.innerHTML = (a);



var scoreDate =0 ;


function buttonA() {
    if(spanResult.innerHTML == a){
        scoreDate+=1;
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!'
    }else if(spanResult.innerHTML == b){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == c){
        spanAviso.style.opacity='1';

    }else if(spanResult.innerHTML == d){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == e){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == f){
        scoreDate+=1
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!'
    }else if(spanResult.innerHTML == g){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == h){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == i){
        scoreDate+=1
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!'
    }else if(spanResult.innerHTML == j){
        spanAviso.style.opacity='1';
    }
}
function buttonB() {
    if(spanResult.innerHTML == a){
      spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == b){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == c){
        scoreDate+=1
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!'
    }else if(spanResult.innerHTML == d){
        scoreDate+=1
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!'
    }else if(spanResult.innerHTML == e){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == f){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == g){
        scoreDate+=1
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!'
    }else if(spanResult.innerHTML == h){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == i){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == j){
        spanAviso.style.opacity='1';
    }

}
function buttonC() {
    if(spanResult.innerHTML == a){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == b){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == c){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == d){
        scoreDate+=1
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!'
    }else if(spanResult.innerHTML == e){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == f){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == g){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == h){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == i){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == j){
        spanAviso.style.opacity='1';
    }

}
function buttonD() {
    if(spanResult.innerHTML == a){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == b){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == c){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == d){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == e){
        scoreDate+=1
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!'
    }else if(spanResult.innerHTML == f){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == g){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == h){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == i){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == j){
        scoreDate+=1
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!'
    }

}
function buttonE() {
    if(spanResult.innerHTML == a){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == b){
        scoreDate+=1
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!';
    }else if(spanResult.innerHTML == c){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == d){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == e){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == f){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == g){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == h){
        scoreDate+=1
        spanAviso.style.opacity='1';
        spanAviso.style.backgroundColor='green';
        textAviso.textContent='Parabéns, você acertou!'
    }else if(spanResult.innerHTML == i){
        spanAviso.style.opacity='1';
    }else if(spanResult.innerHTML == j){
        spanAviso.style.opacity='1';
    }

}



















