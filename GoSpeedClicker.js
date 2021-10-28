setTimeout(function(){});

// setTimeout(arg1, arg2)

setTimeout(function(){}, 1000)

setInterval(function(){
    console.log('hello');
 }, 1000)
 
 // 1 second
 'hello!'
 // 2 seconds
 'hello!'

 
 var intervalID = setInterval(function(){
    console.log('hello!')
 }, 1000)

 var intervalID = setInterval(function(){
    console.log('hello!')
 }, 1000);
 
 // 1 second
 'hello!'
 
 // 2 seconds
 'hello!'
 
 clearInterval(intervalID)

 function sayHello(){
    console.log("Hello!");
 }
 
 var intervalID = setInterval(sayHello, 1000); 
    
 var display = document.getElementById('time-display');

 function getTime(){
     var now = new Date();
     var hour = now.getHours();
     var min = now.getMinutes();
     var sec = now.getSeconds();
     if(hour < 10){
         hour = `0${hour}`;
     }
     if(min < 10){
         min = `0${min}`;
     }
     if(sec < 10){
         sec = `0${sec}`;
     }

     display.textContent = `${hour}:${min}:${sec}`;
 }

 setInterval(getTime, 1000);
