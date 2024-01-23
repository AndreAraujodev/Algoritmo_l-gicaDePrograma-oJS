
// const nome = prompt("Qual é o seu nome ?");
// alert ("Olá, " + nome);

// alert ("Vamos somar 2 números ");
// const number1 = prompt ("digite o primeiro número :");
// const number2 = prompt ("digite o segundo número :");
// alert ("Resultado final : " + (Number(number1) + Number(number2)) / 2 );


// alert ("Calcular média de Aluno")
// let name = prompt ("Qual o nome do Aluno : ");
// let nota1 = prompt (`digite a primeira nota do aluno ${name} : `);
// let nota2 = prompt (`digite a segunda nota do aluno ${name} : `);
// let nota3 = prompt (`digite a terceira nota do aluno ${name} : `);

// let average = ((Number(nota1) + Number(nota2) + Number(nota3)) / 3);
// average = average.toFixed(2)
// alert (` A média do Aluno ${name} foi : ${average}`);



// // average = média

// if(average >= 7) {
//   alert ("Aluno Aprovado !") 
// } else {
//   alert ("Aluno reprovado !")
// }

//LAÇO DE REPETIÇÃO 
// let itens = [];

// for (let item = 0; item < 10; item++) {
//   let itemName = prompt (`digite o item : ${item + 1}`)
//   itens [item] = itemName
 
// }

// alert (itens)
// alert (itens[0])



// CRIAR UM PROGRAMA COM NÚMERO RANDÔMICO PARA ADVINHAR 
// CONTAR A QUANTIDADES DE TENTANTIVAS 
// EXIBIR A INFORMAÇÃO
// UTILIZEI OBJETO MATH E OS MÉTODOS RANDOM / ROUND 
// MÉTODO CEIL E FLOOR AREDONDAMENTO 

//  let result = prompt ("Advinhe o número que estou pensando? Está entre 0 e 10");

//  let randowNumber = Math.round(Math.random ()*10);

//  let xAttempts = 1;

//  while(Number(result) != randowNumber) {
//   result = prompt("Erro, tente novamente:")
//   xAttempts++
//  }

//  alert( `Parabéns! Você advinhou o número em ${xAttempts} tentativas`)

//  alert(`o número que vc acertou foi ${randowNumber}`)


//programa para lista produtos com um MENU
// foi utilizado no programa abaixo o while (enquanto) como opção para 
// rodar o programa até quando menu for != (diferente) de 3 
// utilizando if/else (estrutura condicional)


// let option;
// let list = [];


// while (option != 3) {
  
//   option = Number(prompt(`DIGITE O NÚMERO DO MENU ABAIXO:

//   1. CADASTRAR UM ITEM NA LISTA
//   2. MOSTRAR ITENS CADASTRADOS 
//   3. SAIR DO PROGRAMA 
  
//   ------------------------------
//   `))

//   if (option == 1) {
//     let item = prompt("DIGITE UM NOME PARA SUA LISTA : ")
//     list.push(item)
//   }
  
  
//   else if (option == 2) {
//      if(list.length == 0 ) {
//       alert("NÃO EXISTE ITEM NA LISTA")
//      } else {
//       alert (list)
//      }
  
//   }

// }

// alert ("PROGRAMA ENCERRADO !!!")

//programa para lista produtos com um MENU
// foi utilizado no programa abaixo o while (enquanto) como opção para 
// rodar o programa até quando menu for != (diferente) de 3 
// switch (estrutura condicional)



// let option;
// let list = [];

// while (option != 3) {

//   option = Number(prompt(`
//   OLÁ, DIGITE O NÚMERO DAS OPÇÕES ABAIXO:

//   1. CADASTRAR UM ITEM NA LISTA
//   2. MOSTRAR ITENS CADASTRADOS 
//   3. SAIR DO PROGRAMA 
  
//   ------------------------------
//   `))
  
// switch(option) {
     
//   case 1:
//   let item = prompt("DIGITE UM NOME PARA SUA LISTA : ")
//   list.push(item)
//   break;
//   case 2:
//   if(list.length == 0) {
//   alert("NÃO EXISTE ITEM NA LISTA")
//   } else {
//     alert (list)
//   }
//   break;
//   case 3:
//     alert("PROGRAMA ENCERRADO !!!")
//   break;
//   default:
//     alert ("OPÇÃO INEXISTENTE, TENTE NOVAMENTE !!!")
// }

// }

/*
[] estrutura de dados: Objeto
  [] object literal
  [] estrutura de repetição for
  [] estrutura de repetição for...ind

*/

let patients = [
  {
    name:"Luiz",
    age: 22,
    weight: 70,
    height:1.70,
},
{
  name:"André",
  age: 24,
  weight: 80,
  height:1.70,
},
{
  name:"Felipe",
  age: 26,
  weight: 90,
  height:1.70,
},
]

// alert(patient[2].name)

// let patientName = []
// let patientAge = []
// let patientWeight = []

// // for(index = 0; index < patients.length; index++) {
// //   patientName[index] = patients[index].age

// // }

// // alert(patientName)

// for(let patient of patients) {
//   patientName.push(patient.name)
// }

// for(let patient of patients) {
//   patientAge.push(patient.age)
// }

// for(let patient of patients) {
//   patientWeight.push(patient.weight)
// }

// alert(patientName)
// alert(patientAge)
// alert(patientWeight)

// for(index = 0; index < patients.length; index++) {alert(`${patientName[index]} tem ${patientAge[index]} anos e pesa ${patientWeight[index]}`)}

// // CALCULANDO O IMC

// imcPatient = []

// for (index = 0; index < patients.length; index++) {
// imcPatient(index) = (patients[index].weight / (patient[index].height))
// alert (`o paciente ${patients[index].name} tem o IMC de ${imcPatient(index)}`)
// }
  
// function printPatintIMC (pacient) {
//   alert(`o Paciente ${pacient.name} possui o IMC de ${(pacient.weight / (pacient.height ** 2)).toFixed(2)}`)
// }

// for (let patient of patients)
// printPatintIMC(patient)

var number1 = prompt (`Insira o primeiro número : `);
var number2 = prompt (`Insira o segundo número :`);
var operator = prompt (`Insira o sinal desejado (+/-/X/%):`);
 
   if(operator == "+") {
   alert (Number(number1) + Number(number2))
     } 
     else if(operator == "-") {
    alert (number1 - number2)
     } 
     else if (operator == "*") {
     alert (number1 * number2)
     } 
     else if (operator == "/") {
     alert (number1 / number2)
    } 
       else {
      alert ("DIGITE UM OPERADOR VÁLIDO")
    }

 var soma = (Number(number1) + Number(number2))
 alert (soma)
      
    if ((soma % 2) !== 0) {
      alert('A soma dos dois números é impar!')
    } else {
      alert('A soma dos dois números é par!')
    }
 
    if (number1 !== number2) {
      alert('Os números são diferentes!')
    } else {
      alert('Os números são iguais!')
    }

 
