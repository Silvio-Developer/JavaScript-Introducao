/*
function soma(a, b){
    console.log(a + b);
    return a + b;
}
soma(10, 15);
*/
let evenNums = [];

function returnEventValues(array){
    for (let i =0; i < array.length; i++){
        if (array[i] %2 === 0){
            evenNums.push(array[i]);
        }
        else{
            console.log("O número: [", array[i], "],não e par!")
        }
    }
    console.log("\nOs números pares são:", evenNums, "\n");
}
let array = [1, 2, 4, 5, 7, 8];

returnEventValues(array);
