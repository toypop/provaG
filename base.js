function isEvenOrOdd(inputNumber) {
    let result;

    if (inputNumber % 2 ==0) {
        result="pari";
    } else {
        result="dispari";
    }
    console.log("Il numero "+inputNumber+" ae' " + result)
}
 
isEvenOrOdd(6);
isEvenOrOdd(7);

let myString="arcobalenooo"; 
console.log("La lunghezza della stringa e' "+myString.length);

let numVocali=0;
for (c=0;c<myString.length;c++) {
    if (myString[c]=='a' || myString[c]=='e' || myString[c]=='i' || myString[c]=='o' || myString[c]=='u'  || 
        myString[c]=='A' || myString[c]=='E' || myString[c]=='I' || myString[c]=='O' || myString[c]=='U' )
        numVocali++;
} 
console.log(`Il numero delle vocali nella parola ${myString} e': `+numVocali);

