const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

Object.freeze(MORSE_CODE);

function morse(text) {

let wordArray= [];
let letter = "";
let count;

if (Array.isArray(text) ){

    throw "Please provide a morse string";


}


if (text == "") {

    return "";
    
}






let word = text.split(" ");

    for (let index = 0; index < word.length; index++) {
        
        if ( wordArray.push(MORSE_CODE[word[index]]) == undefined) {

            wordArray.push("  ");
            
        }
        
    }


      count = 0;


    for (let a = 0; a < wordArray.length; a++) {

        let  single = wordArray[a];


        if (single == undefined  && count == 0) {

            count = count + 1; 

          
            
              single = " ";

           
        }

        if (single == undefined && count > 0) {

            single ="";
            
        }

        if (count > 0 && wordArray[a + 1] != undefined ){

            count = 0;
        }

        letter = letter + single;
       

        
    }


    return letter.trim();


}

module.exports = morse;
