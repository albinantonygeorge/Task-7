viewmarks();
title();


function viewmarks() {
   const url = window.location.search;
   const urlParams = new URLSearchParams(url);
   const product = urlParams.get('x')
   var i=product;
   var j= "marks";
   var k=j+i;
   return k;
};


document.getElementById("submit").addEventListener("click",markentry);

function markentry(e){

    var subject = document.getElementById("sub").value;
    var firstInternal = document.getElementById("1st").value;
    var secondInternal = document.getElementById("2nd").value;
    var External = document.getElementById("external").value;

//alert
    if(!subject || !firstInternal || !secondInternal || !External){
        alert("please fill all fields");
        return false; };

//creating object
    var marks = {
        subject : subject,
        firstInternal : firstInternal,
        secondInternal : secondInternal,
        External : External
    };

    e.preventDefault();
    show();

 //initiate array
   if(localStorage.getItem(viewmarks()) === null){
    var scores = [];
    scores.push(marks);//add object  to array 
    localStorage.setItem(viewmarks(),JSON.stringify(scores));
 }else{
    var scores =JSON.parse(localStorage.getItem(viewmarks()));
    scores.push(marks);
    localStorage.setItem(viewmarks(),JSON.stringify(scores));
 }

 document.getElementById("model").reset();
 title();
 show();
};


function show(){
    var item =JSON.parse(localStorage.getItem(viewmarks()));
    var table =document.getElementById("table");

    const total = document.createElement('tr');
    if(localStorage.getItem(viewmarks()) !== null){
    table.innerHTML=`
    <thead>
         <tr>
            <th>No</th>
            <th>Subject</th>
            <th>First Internal(25)</th>
            <th>Second Internal(25)</th>
            <th>External(50) </th>
            <th>Total</th>
        </tr>
    </thead>`;
      var Total=0;
    for(var i = 0 ; i < item.length ; i++ ){
       var sub = item[i].subject;
       var fir = +item[i].firstInternal;
       var sec = +item[i].secondInternal;
       var ext = +item[i].External;
      var Totalpercent = (fir+  sec+ ext)/100;
      Total += Totalpercent;
      

          table.innerHTML += `
          <tr>
          <th>${i+1}</th>
          <td>${sub}</td>
          <td>${fir}</td>
          <td>${sec}</td>
          <td>${ext}</td>
          <td>${fir + sec + ext}</td>
          </tr>
          `;
     }};

     var cgpa = (Total*10) /(i);

     if(localStorage.getItem(viewmarks()) !== null){
        table.innerHTML +=`
            <tr>
            <th></th>
            <td>CGPA</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${cgpa.toFixed(2)}</td>
            </tr>
             `;

}};
 function title(){
    if(localStorage.getItem(viewmarks()) === null){
       document.getElementById("title").innerHTML="no marks added...";
    }  
   else{
      document.getElementById("title").innerHTML=" ";
   }};