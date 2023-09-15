/**
    (replace this with your function comment which describes 
    what your function does, what the arguments are, and what 
    the output should be.)
*/
function doubleBracket(s) {
    var new_word = "";
    var first_double = s.indexOf("[[") + 2;
    var second_double = s.indexOf("]]");

		new_word = s.substring(first_double, second_double);
    
    console.log(new_word);
}

var word = "xx[[abc]]xx";
doubleBracket(word);