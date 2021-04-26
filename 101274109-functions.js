

function function1(string) {
    var leng;
    var count = 0; // count each characters found 

    for (var i = 0, leng = string.length; i < leng; i++) {
        var cCode = string.charCodeAt(i); // converted to charcode
        if ((cCode > 47 && cCode < 58) || //checking value of characters in ASCII
            (cCode > 64 && cCode < 91) ||
            (cCode > 96 && cCode < 123)) {
            count++; //increments if between specified range
        }
    }

    return count;

};



function function2(string, number) {
    var star = "*"; // star assigned as string
    var addstar = ""; // will increment stars


    for (let i = 0; i < number; i++) {
        addstar += star;
    }

    return addstar + string + addstar;//adding stars at the beginning and at the end


}



function function3(string, character) {
    let elements = "";
    let upperCase = "";
    let charASCII = character.charCodeAt();//Converts to ASCII code

    for (let i = 0; i < string.length; i++) {
        elements = string.charCodeAt(i); //Converts to ASCII code each element

        if (elements == charASCII) { // checks if they have same value

            upperCase += String.fromCharCode(charASCII - 32); //difference between capital and small is 32 at ASCII 

        }
        else if (elements === (charASCII - 32) || elements === (charASCII + 32)) { //checks if the difference +32 and -32

            upperCase += String.fromCharCode(charASCII); // convert to string from ASCII

        }
        else {
            upperCase += String.fromCharCode(elements);// convert to string from ASCII

        }

    }
    return upperCase;
}



function function4(array, oddOrEven) {
    let elements = "";

    for (let i = 0; i < array.length; i++) {//take all elements
        if (oddOrEven == "odd") { //check if odd
            if (array[i] % 2 === 0 || isNaN(array[i])) { //if element can divide
                if (elements) {
                    elements += "-";//if present add "-"
                }
                elements += array[i]; // add following elements
            }
        }

        if (oddOrEven == "even") { //check if even
            if (array[i] % 2 !== 0 || isNaN(array[i])) {//if element can not divide

                if (elements) {
                    elements += "-";//if present add "-"
                }
                elements += array[i];// add following elements
            }
        }
    }
    return elements;

}



function function5(array, sumTotal) {

    let sumOfElements = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfElements += array[i]; // summing each following element
        if (sumOfElements >= sumTotal) { //stop and return if second argument equal to sum of passed array element
            return sumOfElements;
        }
    }

}




function function6(array) {

    let elementsToStr = "";
    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        elementsToStr += array[i];//catch each element of array
    }

    for (let i = 0; i < elementsToStr.length; i++) {
        sum += elementsToStr.charCodeAt(i); //convert to ASCII and get sum

    }
    return sum;
}





function function8(string, character) {

    var value = "";

    for (let i = 0; i < string.length; i++) { //get passed arguments

        let count = 0;

        for (let j = 0; j < string[i].length; j++) {

            let absValue = Math.abs(string[i].charCodeAt(j) - character.charCodeAt(0));//check and get absolute value each passed argument

            if (j % 2 !== 0 && (string[i][j] === character || absValue == 32)) { //check if equal and character and absolute equal 32

                count++; //if found increment by one

            }
        }
        if (i) {//check value if present add "-"

            value += "-";
        }
        value += count;//add following 

    }
    return value;
}




function function9(params) {

    let numberToStr = "";

    for (let i = 0; i < params.length; i++) {//get each passed arguments

        numberToStr += String.fromCharCode(params[i]); //get value from ASCII and convert to string
    }
    return numberToStr;

}