



function ajax(){
    // creating an XHR object
   var xhttp = new XMLHttpRequest();
// Event listner
xhttp.onreadystatechange = function(){
   //condition
   if(this.readyState==4&&this.status==200){
       var response = JSON.parse(this.responseText);
      
       var output = "";
       for(var i=0;i<response.length;i++){
           output+="<li>"+ response[i].title +"</li>";

       }
       document.getElementById("demo").innerHTML=output
   }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}