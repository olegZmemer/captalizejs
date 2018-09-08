var word = prompt('Какое слово вам сделать с большой буквы? ');

var wordArray = word.split('');

var firstLetter = wordArray.shift(0);

var end1 = wordArray.join("");

var end = firstLetter.toUpperCase() + end1;  

// Noob

alert(end)


var word = prompt('Какие слова вам сделать с большой буквы? ');
var wordEnd = '';
for(i = 0; i < word.length; i++){
    wordEnd += (word[i - 1] == " " || word[i - 1] == undefined) ? word[i].toUpperCase() : word[i];
}
var wordEnd = wordEnd.shift(0);
alert(wordEnd);

// Another way  

var ji = "yes gello ddsa";
var ji = ji.replace(/\b\w/g, l => l.toUpperCase());

alert(ji);

// Regular , but only latin

function captalizee (){
    var s1 = 'hello goeld'
    var s =  s1.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(" ");
    console.log(s);

}

captalizee()

// Ideal almost


