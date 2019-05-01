




function parser(paragraph){
  var paragraph = paragraph;
  var container = [];
  var temp = [];
  var splitted = paragraph.split("  S");
  return splitted;
};











$(document).ready(function(){
    var paragraph = $("#whole")[0].innerHTML;
    console.log(parser(paragraph)[1]);
});
