keylist="abcdefghijklnmopqrstuvwxyz!@#$%&_"
    function passgen(len){
        tmp="";
        for(i=0;i<len;i++){
            tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length));
        }
        return tmp;
        
    }
       function gen(en){
           document.myform.fname.value=passgen(en);
       }
