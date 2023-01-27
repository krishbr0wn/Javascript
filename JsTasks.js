//1.

let num1 = 10
let num2 = 20
total=num1+num2;
function sum(num1, num2) {
    return num1 + num2
}

console.log(total)

//2.

function vowelfinder(str) {
    var string2 = "heeey";
    for(var i = 0; i < str.length; i++) { 
        if(string[i] === "a" || "e" || "i" || "o" || "u") { 
        second += (str[i]); 
        }
     }
   return second; 
   }

   console.log(vowelfinder)


//3.

let number1=5;
function powerfinder(numb) {
    pw=numb ** 3;
    return pw;
}
console.log(powerfinder)


//4.

function oddeven(number) {
    if ((number % 2) === 0) {
        return true;
      } else
        return false;
    };
console.log(oddeven)

//5.

function rvrs(str) {
    return str.split("").reverse().join("");
}
rvrs("yahoo");
console.log(rvrs)

//7.

function numbers(num) {
    let aaa = 0
    for (let i = 1; i <= num; i++) {
        aaa += i
    }
    return aaa
}


//8.

function sqrt(numb) {
    return Math.sqrt(numb)
}

9.
