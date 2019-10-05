var testText = "Here is the text with 'one quote' quotes and it needs ' to be  changed ' to double-quotes everywhere. " +
    "Moreover, further text doesn't need to be changed";

let changeToDoubleQuote = function(text) {
    text = text.replace(/ '/g, ' \"');
    text = text.replace(/' /g, '\" ');
    return text;
};

console.log(changeToDoubleQuote(testText));