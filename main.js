title();

function findurl(){
let base = document.baseURI;
console.log(base);
var http = base+"marks.html"
console.log(http);
return http;
};

//listen for submit
document.getElementById("token").addEventListener("submit",submition);

function submition(e){
    //getting values
    var name = document.getElementById("name").value;
    if(!name){
      alert("please fill the name");
      return false; }

    var student = {
        stdname : name 
   };
   e.preventDefault();

   
   //initiate array
   if(localStorage.getItem("details") === null){
      var details = [];
      details.push(student);//add object  to array 
      localStorage.setItem("details",JSON.stringify(details));
   }else{
      var details =JSON.parse(localStorage.getItem("details"));
      details.push(student);
      localStorage.setItem("details",JSON.stringify(details));
   }

   document.getElementById("token").reset();
   title();
   display();

};


function display(){
   var details =JSON.parse(localStorage.getItem("details"));
   var tablerow =document.getElementById("table");


   tablerow.innerHTML=``;
   for(var i = 0 ; i < details.length ; i++ ){
      var name = details[i].stdname;
      

      // var url = new URL("http://127.0.0.1:5500/task7/marks.html");//
      var url = new URL(findurl());
      
      url.searchParams.append('x', i);
    

         tablerow.innerHTML += `
         <tr>
         <th>${i+1}</th>
         <td>${name}</td>
         <td class="text-end"><a href=${url}><button class="btn btn-light" >view mark</button></a></td>
         </tr>
         `;
         
    }
};

function title(){
   if(localStorage.getItem("details") === null){
      document.getElementById("title").innerHTML="no students added...";
   }else{
      document.getElementById("title").innerHTML="STUDENTS LIST";
   }
};