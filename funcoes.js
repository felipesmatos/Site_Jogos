//Código Cadastro

let nome = ''
function Cadastro(){
    nome = document.querySelector("#idNomep").value
    let forms = document.querySelector("#idForms")
    //alert(nome)
    if(nome == ""){
        alert("Insira um nome!")
    }
    else{
        if(document.querySelector("#idTabuada").checked){
            forms.style.display = 'none';
            document.querySelector("#Tabuada").style.display = 'block'
            Tabuada()
        }
        else if(document.querySelector("#idNumero").checked){
            forms.style.display = 'none'
            document.querySelector("#Numero").style.display = 'block'
        }else{
            alert("Escolha um jogo!")
        }
    }
}

//Código Número Mágico

let NumeroMagico = Math.floor(Math.random() * 50)+1
let NumPalp = 0
function Numero(palpite){
    
    document.querySelector("#idpalpiteN").value = ``
    document.querySelector("#resposta").innerHTML = ``
    //NumeroMagico = 10
    if(isNaN(palpite)){
        document.querySelector("#resposta").innerHTML = `Digite um numero!`
    }
    else if(palpite > 50){
        document.querySelector("#resposta").innerHTML = `Digite um valor entre 1 e 50!`
    }
    else if(palpite > NumeroMagico){
        NumPalp ++
        document.querySelector("#resposta").innerHTML = `O Número Mágico é menor`
    }
    else if(palpite < NumeroMagico){
        NumPalp ++
        document.querySelector("#resposta").innerHTML = `O Número Mágico é maior`
    }else{
        document.querySelector("#resposta").innerHTML = `Você acertou com ${NumPalp} tentativas!`
        document.querySelector(".fimJogoN").style.display = 'block'
    }
}

//Código Tabuada

let num1 = Math.floor(Math.random() * 10)+1
let num2 = Math.floor(Math.random() * 10)+1
let pontos = 0.0
let fase = 0
function Tabuada(){
    if(fase == 0){
        document.querySelector("#enunciado").style.display = 'block'
        document.querySelector("#enunciado").innerHTML = `${num1} X ${num2} = ?`
        fase++
    }
    else if(fase > 5){

    }else{
        document.querySelector("#enunciado").style.display = 'block'
        document.querySelector("#enunciado").innerHTML = `${num1} X ${num2} = ?`
        switch(fase){
            case 1: if(ComparaValor(num1*num2, document.querySelector("#idPalpiteT").value)){
                alert(`${num1} X ${num2} = ${num1 * num2}. Acertou parabéns!`)
                pontos += 2.0;
            }
            else{
                alert(`${num1} X ${num2} = ${num1 * num2}. Você errou!`)
                pontos -= 1.0;
            } 
            fase++;
            document.querySelector("#idPalpiteT").value = ''
            num1 = Math.floor(Math.random() * 10)+1
            num2 = Math.floor(Math.random() * 10)+1
            document.querySelector("#enunciado").innerHTML = `${num1} X ${num2} = ?`
            break

            case 2: if(ComparaValor(num1*num2, document.querySelector("#idPalpiteT").value)){
                alert(`${num1} X ${num2} = ${num1 * num2}. Acertou parabéns!`)
                pontos += 2.0;
            }
            else{
                alert(`${num1} X ${num2} = ${num1 * num2}. Você errou!`)
                pontos -= 1.0;
            } 
            fase++;
            document.querySelector("#idPalpiteT").value = ''
            num1 = Math.floor(Math.random() * 10)+1
            num2 = Math.floor(Math.random() * 10)+1
            document.querySelector("#enunciado").innerHTML = `${num1} X ${num2} = ?`
            break

            case 3: if(ComparaValor(num1*num2, document.querySelector("#idPalpiteT").value)){
                alert(`${num1} X ${num2} = ${num1 * num2}. Acertou parabéns!`)
                pontos += 2.0;
            }
            else{
                alert(`${num1} X ${num2} = ${num1 * num2}. Você errou!`)
                pontos -= 1.0;
            } 
            fase++;
            document.querySelector("#idPalpiteT").value = ''
            num1 = Math.floor(Math.random() * 10)+1
            num2 = Math.floor(Math.random() * 10)+1
            document.querySelector("#enunciado").innerHTML = `${num1} X ${num2} = ?`
            break

            case 4: if(ComparaValor(num1*num2, document.querySelector("#idPalpiteT").value)){
                alert(`${num1} X ${num2} = ${num1 * num2}. Acertou parabéns!`)
                pontos += 2.0;
            }
            else{
                alert(`${num1} X ${num2} = ${num1 * num2}. Você errou!`)
                pontos -= 1.0;
            } 
            fase++;
            document.querySelector("#idPalpiteT").value = ''
            num1 = Math.floor(Math.random() * 10)+1
            num2 = Math.floor(Math.random() * 10)+1
            document.querySelector("#enunciado").innerHTML = `${num1} X ${num2} = ?`
            break

            case 5: if(ComparaValor(num1*num2, document.querySelector("#idPalpiteT").value)){
                alert(`${num1} X ${num2} = ${num1 * num2}. Acertou parabéns!`)
                pontos += 2.0;
            }
            else{
                alert(`${num1} X ${num2} = ${num1 * num2}. Você errou!`)
                pontos -= 1.0;
            } 
            fase++;
            if(pontos == 10.0){
                document.querySelector("#enunciado").innerHTML = `Parabéns ${nome}, Você atingiu o nível máximo do jogo! ${pontos} pontos`
            }
            else{
                document.querySelector("#enunciado").innerHTML = `${nome}, Você fez ${pontos} pontos`
            }
            document.querySelector("#idPalpiteT").value = ''
            document.querySelector(".fimJogoT").style.display = 'block'
            break
        }

    }
    
}

function ComparaValor(resposta, palpite){
    if(resposta == palpite){
        return true
    }
    else{
        return false
    }

}

function Replay(op){
    if(op == 1){
        num1 = Math.floor(Math.random() * 10)+1
        num2 = Math.floor(Math.random() * 10)+1
        fase = 0;
        document.querySelector(".fimJogoT").style.display = 'none'
        Tabuada()
    }
    else if(op == 2){
        NumeroMagico = Math.floor(Math.random() * 50)+1
        NumPalp = 0
        document.querySelector("#resposta").innerHTML = ''
        document.querySelector(".fimJogoN").style.display = 'none'
    }
}

function Menu(){
    document.querySelector("#Tabuada").style.display = 'none'
     document.querySelector("#Numero").style.display = 'none'
    document.querySelector("#idForms").style.display = 'block'
}