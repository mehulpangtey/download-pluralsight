var list = document.getElementsByTagName("section");
var counter=0;
for (var i=0; i<list.length; i++) {
   if ( list[i].className.match(/\bmodule\b/) ) {
      var header_text = list[i].getElementsByTagName("h2")[0].innerText;
      var ul = list[i].getElementsByClassName('clips');
      var li_list = ul[0].getElementsByClassName('title');
      if ( li_list.length > 1 ) {
         console.log("------" + header_text + "------");
         for (var y=0; y<li_list.length; y++) {
            counter += 1;
            console.log(counter + " - " + li_list[y].innerText);
         }
         console.log(" ");
         console.log(" ");
      }
   }
}
 
function downloadVideo(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}