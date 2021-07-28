let gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

let lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

let bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

// 1) Escreva uma função que transforme bestThing em array, encontre e retorne o índice 'only' dentro dela. Lembre-se de também adicionar os resultados à página.
function kataExtra1(strExtra1){
    let arrExtra1 = strExtra1.split(" ");
    return arrExtra1.indexOf("only");
}
console.log('======== Extra 2 =========');
console.log(kataExtra1(bestThing))






// 2)Escreva uma função que encontre e retorne o índice da última palavra do array 'bestThing'. Lembre-se de também adicionar os resultados à página.
function kataExtra2(best){
    let arrBest = bestThing.split(" ");
    let res = arrBest.lastIndexOf("bit")
    
    
    return res
}
console.log('======== Extra 2 =========');
console.log(kataExtra2(bestThing))






// 3) Escreva uma função que encontre e retorne um array de todas as cidades de 'gotCitiesCSV' que tiverem vogais duplicadas ('aa', 'ee', etc.). Lembre-se de também adicionar os resultados à página.


function filterItems(query) {
    let arrBest3 = gotCitiesCSV.split(",");
    return arrBest3.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }

  console.log('======== Extra 3 =========');
  console.log(filterItems('aa'));
  console.log(filterItems('ee')); 








// 4) Escreva uma função que encontre e retorne um array com todas as cidades de 'lotrCitiesArray' que terminem em 'or'. Lembre-se de também adicionar os resultados à página.


function filterItems2(query1) {
    
    return lotrCitiesArray.filter(function(el) {
        return el.toLowerCase().indexOf(query1.toLowerCase()) > -1;
    })
  }
  
  console.log('======== Extra 4 =========');
  console.log(filterItems2('or'));
  




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

console.log('======== Extra 5 =========');
console.log(kataExtra5(bestThing));


// 6) Escreva uma função que retorne 'Sim' ou 'Não' se 'lotrCitiesArray' incluir 'Mirkwood'. Lembre-se de também adicionar os resultados à página.

function kataExtra6 (arrE6){
    
    for (let i = 0; i < arrE6.length; i++){        
        if (arrE6[i] !== 'Mirkwood'){
            return 'Sim';
        } 
        
        return 'Não';
        
        
    }
    
}

console.log('======== Extra 6 =========');
console.log(kataExtra6(lotrCitiesArray));




// 7) Escreva uma função que retorne 'Sim' ou 'Não' se 'lotrCitiesArray' incluir 'Hollywood'. Lembre-se de também adicionar os resultados à página.

function kataExtra7(arrE7) {
   
    for (let i = 0; i < arrE7.length; i++){        
        if (arrE7[i] === 'Hollywood'){
            return 'Sim'
        } 
        
        return 'Não'
                
    }
    
}

console.log('======== Extra 7 =========');
console.log(kataExtra7(lotrCitiesArray));





// 8) Escreva uma função que retorne o índice de 'Mirkwood' em 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página.

function kataExtra8(arrE8) {
    let elem = 'Mirkwood';
    let idx = arrE8.indexOf(elem)

    return idx
}

console.log('======== Extra 8 =========');
console.log(kataExtra8(lotrCitiesArray));





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

console.log('======== Extra 9 =========');
console.log(katasExtra9(lotrCitiesArray));
console.log(lotrCitiesArray)


// 10) Escreva uma função que inverta a ordem de 'lotrCitiesArray' e retorne o novo array. Lembre-se de também adicionar os resultados à página.
function katasExtra10(arrExtra10){

    return arrExtra10.reverse();
}
console.log('======== Extra 10 =========');
console.log(katasExtra10(lotrCitiesArray))


// 11) Escreva uma função que ordene 'lotrCitiesArray' alfabeticamente e retorne o novo array. Lembre-se de também adicionar os resultados à página.
function kataExtra11(arrExtra11){
    return arrExtra11.sort();
}

console.log('======== Extra 11 =========');
console.log(kataExtra11(lotrCitiesArray))




// 12) Escreva uma função que ordene 'lotrCitiesArray' pelo número de caracteres em cada cidade (por exemplo, a cidade mais curta aparece primeiro) e retorne o novo array. Lembre-se de também adicionar os resultados à página.
function kataExtra12(arrExtra12) { 
    let arrResp = []       
    arrExtra12.sort(function (a, b){
        
      return  a.length - b.length       
    })


    
}

console.log('======== Extra 12 =========');
console.log(kataExtra12(lotrCitiesArray))






