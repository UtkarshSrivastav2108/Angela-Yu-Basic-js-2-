prompt("Enter the First Name");
prompt("Enter the Second Name");
var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 75) {
    alert("Your Love Score is " + loveScore + "%," + " Your Love is like HeerRanjha");
} else {
    alert("Your Love Score is  " + loveScore + " %");
}

// Leap Year
function isLeap(year){

    if(year%4===0){
      if(year%100===0){
        if(year%400===0){
    return "Leap Year";
        }else{
     " not Leap Year";
        }
      }else{
        return " Leap Year";
      }
    
    }else {
      return "Not a Leap Year";
    }
    
    // }Includes....
    

    var guestList=["Utkarsh","Shreshtha","Kundan","Ankit","Mohan","Paras","Hitesh"];
var guestName = prompt("What is Your Name");
if(guestList.includes(guestName)){
   alert("Welcome to the Party");
}else {
   alert("Better Luck Next Time");
}
