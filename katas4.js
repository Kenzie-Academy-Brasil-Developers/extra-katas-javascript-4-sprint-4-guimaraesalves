let gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

let lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

let bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

// 1) Escreva uma função que retorna um array com as cidades em 'gotCitiesCSV'. Lembre-se de também adicionar os resultados à página.

function kata1(str) {   
    let arr1 = str.split(",");
    return arr1;
}

console.log(kata1(gotCitiesCSV));
document.getElementById("kata1").innerHTML = kata1(gotCitiesCSV);




// 2) Escreva uma função que retorna um array das palavras na frase contida em 'bestThing'. Lembre-se de também adicionar os resultados à página.

function kata2(str1) {
    let arr2 = str1.split(" ");
    return arr2;
}

console.log(kata2(bestThing));
document.getElementById("kata2").innerHTML = kata2(bestThing);



// 3) Escreva uma função que retorna uma string separada por ponto-e-vírgulas em vez das vírgulas de 'gotCitiesCSV'. Lembre-se de também adicionar os resultados à página.

function kata3(str2) {    
    let str3 = kata1(str2).join("; ");   
    return str3;
}


console.log(kata3(gotCitiesCSV));
document.getElementById("kata3").innerHTML = kata3(gotCitiesCSV);




// 4) Escreva uma função que retorne uma string CSV (separada por vírgulas) de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.

function kata4(arr4){
    let strCSV = arr4.join(", ");

    return strCSV;
}


console.log(kata4(lotrCitiesArray));
document.getElementById("kata4").innerHTML = kata4(lotrCitiesArray);




// 5) Escreva uma função que retorna um array com as 5 primeiras cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.

function kata5(arr5){
    let fiveCity = []
    for (let i = 0; i < 5; i++){
        fiveCity.push(arr5[i]);        
    }
    return fiveCity
}

console.log(kata5(lotrCitiesArray));
document.getElementById("kata5").innerHTML = kata5(lotrCitiesArray);




// 6) Escreva uma função que retorna um array com as 5 últimas cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.

function kata6(arr6){
    let arrLast = [];
    for (let j = arr6.length - 1; j > arr6.length - 6; j-- ){
        arrLast.push(lotrCitiesArray[j]);
    }
    return arrLast.reverse();
}

console.log(kata6(lotrCitiesArray))
document.getElementById("kata6").innerHTML = kata6(lotrCitiesArray);


// 7) Escreva uma função que retorna um array contendo da 3ª a 5ª cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.

function kata7(arr7){
    return arr7.slice(2, 5);  
}


console.log(kata7(lotrCitiesArray));
document.getElementById("kata7").innerHTML = kata7(lotrCitiesArray);


// 8) Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.

function kata8(arr8){
    let indice = arr8.indexOf('Rohan');
    let remove = arr8.splice(indice, 1);

    return arr8;

}


console.log(kata8(lotrCitiesArray));
document.getElementById("kata8").innerHTML = kata8(lotrCitiesArray);


let lotrCitiesArray2 = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];



// 9) Escreva uma função que use 'splice' para remover todas as cidades depois de 'Dead Marshes' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.

function kata9(arr9){
    let indice2 = arr9.indexOf('Dead Marshes');
    let remove2 = arr9.splice(indice2 + 1);

    return arr9;
}


console.log(kata9(lotrCitiesArray));
document.getElementById("kata9").innerHTML = kata9(lotrCitiesArray);


// 10) Escreva uma função que use 'splice' para adicionar 'Rohan' de volta ao 'lotrCitiesArray' logo depois de 'Gondor' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.

function kata10(arr10){
    
    let indexGondor = arr10.indexOf('Gondor');
    arr10.splice(indexGondor + 1, 0, 'Rohan');
    return arr10;

}

console.log(kata10(kata8(lotrCitiesArray2)));
document.getElementById("kata10").innerHTML = kata10(lotrCitiesArray2);



// 11) Escreva uma função que use 'splice' para renomear 'Dead Marshes' para 'Deadest Marshes' em 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página.

function kata11(arr11){
    let alteraIndex = arr11.indexOf('Dead Marshes')
    arr11.splice(alteraIndex, 1, "'Deadest Marshes'")
    
    return  arr11

}


console.log(kata11(lotrCitiesArray2));
document.getElementById("kata11").innerHTML = kata11(lotrCitiesArray2);




let bestThing2 = "The best thing about a boolean is even if you are wrong you are only off by a bit";

// 12) Escreva uma função que usa 'slice' para retornar uma string com os primeiros 14 caracteres de 'bestThing'. Lembre-se de também adicionar os resultados à página.
function kata12(str12) {    
    return str12.slice(0, 14);     
}

console.log(kata12(bestThing2));
document.getElementById("kata12").innerHTML = kata12(bestThing2);



// 13) Escreva uma função que usa 'slice' para retornar uma string com os 12 últimos caracteres de 'bestThing'. Lembre-se de também adicionar os resultados à página.
function kata13(str13) {
    
    return str13.slice(-12);   
    
}

console.log(kata13(bestThing2));
document.getElementById("kata13").innerHTML = kata13(bestThing2);



// 14) Escreva uma função que usa 'slice' para retornar uma string com os caracteres entre as posições 23 e 38 de 'bestThing'. Lembre-se de também adicionar os resultados à página.
function kata14(str14) {    
    return str14.slice(23, 38);      
}

console.log(kata14(bestThing2));
document.getElementById("kata14").innerHTML = kata14(bestThing2);



// 15) Escreva uma função que faz exatamente a mesma coisa que a #13 mas use o método 'substring' em vez de 'slice'. Lembre-se de também adicionar os resultados à página.
function kata15(str15) {    
    return str15.substr(-12);     
    
}

console.log(kata15(bestThing2));
document.getElementById("kata15").innerHTML = kata15(bestThing2);




// 16) Escreva uma função que faça exatamente a mesma coisa que o #14 mas use o método 'substring' em vez de 'slice'. Lembre-se de também adicionar os resultados à página.
function kata16(str16) {    
    return str16.substr(23, 38);      
}

console.log(kata16(bestThing2));
document.getElementById("kata16").innerHTML = kata16(bestThing2);



let lotrCitiesArray3 = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];


// 17) Escreva uma função que use 'pop' para remover a última cidade de 'lotrCitiesArray e retorne o novo array. Lembre-se de também adicionar os resultados à página.
function kata17(arr17) {
    let resp17 = arr17.pop()   
    
    return arr17
}

console.log(kata17(lotrCitiesArray3));
document.getElementById("kata17").innerHTML = kata17(lotrCitiesArray3);


// 18) Escreva uma função que usa 'push' para adicionar de volta, no final do array, a cidade de 'lotrCitiesArray' que foi removida no #17 e retorne o novo array. Lembre-se de também adicionar os resultados à página.
function kata18(arr18){
    
  let res  =  arr18
  res.push("Harad");

  return res;      
}

console.log(kata18(lotrCitiesArray3));
document.getElementById("kata18").innerHTML = kata18(lotrCitiesArray3);





// 19) Escreva uma função que usa 'shift' para remover a primeira cidade de 'lotrCitiesArray e retorne o novo array. Lembre-se de também adicionar os resultados à página.
function kata19(arr19){
    
    let first = arr19.shift();    

    return arr19;
}
console.log(kata19(lotrCitiesArray3));
document.getElementById("kata19").innerHTML = kata19(lotrCitiesArray3);




// 20) Escreva uma função que use 'unshift' para adicionar de volta, no começo do array, a cidade de 'lotrCitiesArray' que foi removida no #19 e retorne o novo array. Lembre-se de também adicionar os resultados à página.

function kata20(arr20){
    
    let again = arr20.unshift('Mordor');    

    return arr20;
}

console.log(kata20(lotrCitiesArray3));
document.getElementById("kata20").innerHTML = kata20(lotrCitiesArray3);


// =========================================================================
// ===================== BÔNUS OPCIONAL =====================================



// 1) Escreva uma função que transforme bestThing em array, encontre e retorne o índice 'only' dentro dela. Lembre-se de também adicionar os resultados à página.
function kataExtra1(strExtra1){
    let arrExtra1 = strExtra1.split(" ");
    return arrExtra1.indexOf("only");
}

console.log(kataExtra1(bestThing))
document.getElementById("kataE1").innerHTML = kataExtra1(bestThing);







// 2)Escreva uma função que encontre e retorne o índice da última palavra do array 'bestThing'. Lembre-se de também adicionar os resultados à página.
function kataExtra2(best){
    let arrBest = bestThing.split(" ");
    let res = arrBest.lastIndexOf("bit")
    
    
    return res
}

console.log(kataExtra2(bestThing));
document.getElementById("kataE2").innerHTML = kataExtra2(bestThing);






// 3) Escreva uma função que encontre e retorne um array de todas as cidades de 'gotCitiesCSV' que tiverem vogais duplicadas ('aa', 'ee', etc.). Lembre-se de também adicionar os resultados à página.


function filterItems(query) {
    let arrBest3 = gotCitiesCSV.split(",");
    return arrBest3.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }

 
  console.log(filterItems('aa'));
  console.log(filterItems('ee')); 
  document.getElementById("kataE3").innerHTML = filterItems('aa');
  document.getElementById("kataE3").innerHTML = filterItems('ee');








// 4) Escreva uma função que encontre e retorne um array com todas as cidades de 'lotrCitiesArray' que terminem em 'or'. Lembre-se de também adicionar os resultados à página.


function filterItems2(query1) {
    
    return lotrCitiesArray.filter(function(el) {
        return el.toLowerCase().indexOf(query1.toLowerCase()) > -1;
    })
  }
  
  
  console.log(filterItems2('or'));
  document.getElementById("kataE4").innerHTML = filterItems2('or');

  




// 5) Escreva uma função que encontre e retorne um array com todas as palavras de 'bestThing' começando com 'b'. Lembre-se de também adicionar os resultados à página.

function kataExtra5(strE5){
    let arrExtra5 = strE5.split(' ');
    let palavra = []
    for (let i = 0; i < arrExtra5; i++){
        for (let j = 0; j < arrExtra5[i].length; j++){
            if (arrExtra5[i][0] === 'b'){
                palavra.push(arrExtra5[j]);
            }            
        }
    }
    return palavra
}


console.log(kataExtra5(bestThing));
document.getElementById("kataE5").innerHTML = kataExtra5(bestThing);


// 6) Escreva uma função que retorne 'Sim' ou 'Não' se 'lotrCitiesArray' incluir 'Mirkwood'. Lembre-se de também adicionar os resultados à página.

function kataExtra6 (arrE6){
    
    for (let i = 0; i < arrE6.length; i++){        
        if (arrE6[i] !== 'Mirkwood'){
            return 'Sim';
        }         
        return 'Não';      
        
    }    
}


console.log(kataExtra6(lotrCitiesArray3));
document.getElementById("kataE6").innerHTML = kataExtra6(lotrCitiesArray3);




// 7) Escreva uma função que retorne 'Sim' ou 'Não' se 'lotrCitiesArray' incluir 'Hollywood'. Lembre-se de também adicionar os resultados à página.

function kataExtra7(arrE7) {
   
    for (let i = 0; i < arrE7.length; i++){        
        if (arrE7[i] === 'Hollywood'){
            return 'Sim'
        }         
        return 'Não'                
    }
    
}

console.log(kataExtra7(lotrCitiesArray3));
document.getElementById("kataE7").innerHTML = kataExtra7(lotrCitiesArray3);





// 8) Escreva uma função que retorne o índice de 'Mirkwood' em 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.

function kataExtra8(arrE8) {
    let elem = 'Mirkwood';
    let idx = arrE8.indexOf(elem)

    return idx
}


console.log(kataExtra8(lotrCitiesArray3));
document.getElementById("kataE8").innerHTML = kataExtra8(lotrCitiesArray3);





// 9) Escreva uma função que encontre e retorne a primeira cidade de 'lotrCitiesArray' que tiver mais de uma palavra. Lembre-se de também adicionar os resultados à página.

function katasExtra9(arrE9){
    let primPalavra = ''
    for (let i = 0; i < arrE9.length; i++) {
        if (arrE9[i].length > 2){
            primPalavra = arrE9[i]
        }
        break
    }

    return primPalavra
}


console.log(katasExtra9(lotrCitiesArray3));
document.getElementById("kataE9").innerHTML = katasExtra9(lotrCitiesArray3);


// 10) Escreva uma função que inverta a ordem de 'lotrCitiesArray' e retorne o novo array. Lembre-se de também adicionar os resultados à página.
function katasExtra10(arrExtra10){

    return arrExtra10.reverse();
}

console.log(katasExtra10(lotrCitiesArray3))
document.getElementById("kataE10").innerHTML = katasExtra10(lotrCitiesArray3);


// 11) Escreva uma função que ordene 'lotrCitiesArray' alfabeticamente e retorne o novo array. Lembre-se de também adicionar os resultados à página.
function kataExtra11(arrExtra11){
    return arrExtra11.sort();
}


console.log(kataExtra11(lotrCitiesArray3));
document.getElementById("kataE11").innerHTML = kataExtra11(lotrCitiesArray3);





// 12) Escreva uma função que ordene 'lotrCitiesArray' pelo número de caracteres em cada cidade (por exemplo, a cidade mais curta aparece primeiro) e retorne o novo array. Lembre-se de também adicionar os resultados à página.
function kataExtra12(arrExtra12) { 
    let arrResp = []       
    arrExtra12.sort(function (a, b){
        
      return  a.length - b.length       
    })


    
}


console.log(kataExtra12(lotrCitiesArray3));
document.getElementById("kataE12").innerHTML = kataExtra12(lotrCitiesArray3);




