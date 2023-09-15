/**
    (replace this with your function comment which describes 
    what your function does, what the arguments are, and what 
    the output should be.)
*/
function doubleBracket(s) {
    var new_word = "";
    var first_double = s.indexOf("[[") + 2;
    var second_double = s.indexOf("]]");
	if (first_double != 0 && second_double != 0){
		if(second_double < first_double) {
            var newer_word = s.substring(second_double + 2, s.length);
            var new_first_double = newer_word.indexOf("[[") + 2;
            var new_second_double = newer_word.indexOf("]]");
            newer_word = newer_word.substring(new_first_double, new_second_double);
            if (new_first_double == -1 || new_second_double == -1){
                return null;
            }
        return newer_word;
        }    
		new_word = s.substring(first_double, second_double);
   		return new_word;
    }
    else{
    	return null;
    }
}

var word = "xx[[abc]]xx";
console.log(doubleBracket(word));
var word2 = "xxx[[123]] [[]]";
console.log(doubleBracket(word2));
var word3 = "xx]] [[ok]]";
console.log(doubleBracket(word3));
var word4 = "xx]] [[nope";
console.log(doubleBracket(word4));
var word5 = "xx]] [[nope]";
console.log(doubleBracket(word5));
var word6 = "abc";
console.log(doubleBracket(word6));

