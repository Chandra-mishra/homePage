        

         function myFunction() {
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var filter1 = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;     
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ((!filter.test(email.value)) && (!filter1.test(password.value))) {
            
            document.getElementById("message").innerHTML = "invalid Email";
            document.getElementById("message1").innerHTML = "password is not strong please provide uppercase,lowercase,special characters,digits and length of password is atleast eight";
            return false;
        }
             else if(!filter.test(email.value)){
                document.getElementById("message").innerHTML = "invalid Email";
                document.getElementById("email").innerHTML = ""; 
                 return false;
             }
             else if(!filter1.test(password.value)){
                document.getElementById("message1").innerHTML = "password is not strong please provide uppercase,lowercase,special characters,digits and length of password is atleast eight";  
                 return false;
             }
             else{
                 document.getElementById("message").innerHTML = "";
                 document.getElementById("message1").innerHTML = "";
                 return true;
             }
             
    }
        
    