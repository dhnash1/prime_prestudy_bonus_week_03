function add (x){
    x = x+2;
    return x;
}

function multiply (x){
    x = x*3;
    return x;
}

function subtract (x){
  x = x-4;
  return x;
}

console.log( add(multiply(subtract(2))) );
