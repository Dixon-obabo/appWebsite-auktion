

  database =firebase.database();

  cool=()=>{
    window.onload=()=>{
 
        var ok=database.ref('posts');
        
        ok.on('child_added',(snapshot)=>{
         
            var cool=snapshot.val().price;
     
         if(cool==null) {
            //document.write('we cant read the data')
            //document.getElementById("numusers").innerHTML="there is data in your page"
         }
         else{
            // document.getElementById('chosen').textContent=cool;
           // document.write("Hello we got your data");   
        document.getElementById('numusers').innerHTML="there is data in your page"
        };
        
        }); 
       
    
    }




} 
cool();



 writ=()=>{
     document.getElementById('chosen').textContent="this data is just testing arrow functions";
 }



loaddata=()=>{

}

