function clock(){


    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    
    
    
    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();
    
    if(a<=12){
    
        document.getElementById("am").innerHTML="AM";
    } else{
    
        document.getElementById("am").innerHTML="PM";
    }
    
    
    if(a>=12){
        a=(a-12);
    }
    
    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    
    
    
    }
    
    setInterval(clock,1000);
     
    
    
    
    
   
    
    
    function myFunction(){

        var i=document.getElementById("wakeUpTimeSelector").value;
        var hour=new Date().getHours();

             
        if(i==hour){
            document.getElementById("item4").style.backgroundImage="url(./images/wakwup_image.png)";
            document.getElementsById("item4-first-container").innerHTML="Lets Have Some Breakfast";
            document.getElementsByClassName("good-after-noon").innerHTML="Good Morning";
    
        }
    
        var j=document.getElementById("lunchTimeSelector").value;
        
        if(j==hour){
            document.getElementById("item4").style.backgroundImage="url(./images/lunch_image.png)";
            document.getElementsById("item4-first-container").innerHTML="Lets Have Some Lunch";
            document.getElementsByClassName("good-after-noon").innerHTML="Good Afternoon";
        }
    
        var k=document.getElementById("lunchTimeSelector").value;
        
        if(k==hour){
            document.getElementById("item4").style.backgroundImage="url(./images/goodnight_image.png)";
            document.getElementsById("item4-first-container").innerHTML="Lets Have Some Dinner";
            document.getElementsByClassName("good-after-noon").innerHTML="Good Night";
        }
     }
    
    
    
    