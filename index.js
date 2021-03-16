function scuberGreetingForFeet(distance){
  // Write your code here!
  let greeting
  if(distance <= 400){
    greeting = 'This one is on me!'
  }else if(distance > 2000 && distance < 2500) {
    greeting = 'I will gladly take your thirty bucks.'
  }else if(distance > 2500){
    greeting = 'No can do.'
  }
  return greeting
}
scuberGreetingForFeet(2501)



function ternaryCheckCity(city){
  // Write your code here!
  return(city==="NYC" ? "Ok, sounds good." : "No go.");
  
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  
  switch (tip){
      case 'generous':
           return('Thank you so much.');
       
         
      case 'not as generous':
            return('Thank you.');
           

      default:
           return('Bye.'); 
           
          
  }
}