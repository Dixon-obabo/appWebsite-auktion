

  database =firebase.database();

  cool=()=>{
    window.onload=()=>{
 
        var ok=database.ref('posts');
        
        ok.on('child_added',(snapshot)=>{
         
            var cool=snapshot.val().price;
     
         if(cool==null) {
            document.write('we cant read the data')
         }
         else{
             document.getElementById('chosen').textContent=cool;
            //document.write(cool);   
         };
        
        }); 
       
    
    }




} 




 writ=()=>{
     document.getElementById('chosen').textContent="this data is just testing arrow functions";
 }



loaddata=()=>{

}

