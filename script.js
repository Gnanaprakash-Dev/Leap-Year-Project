
function formSubmit(e){
    e.preventDefault();
const yearInputValue = document.getElementById("year");
const dangerText = document.querySelector("span")
const background = document.getElementsByClassName("background")[0];
const message = document.getElementsByClassName("message")[0];
const card = document.getElementsByClassName("card")[0];


const  submitInput = yearInputValue.value;
 
if(isNaN(submitInput) || submitInput.length !== 4 ){
    yearInputValue.style.border = "1px solid red";
    dangerText.style.display = "block";
    dangerText.style.color = "red";   
    message.style.display ="none";
    card.style.paddingTop = "30px";
    return
}

yearInputValue.style.border = "1px solid black";
dangerText.style.display = "none";  

   function checkResult(year){
     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
   }

   let isLeapyear = checkResult(submitInput);
   background.style.backgroundImage = `url('images/${isLeapyear ? "leap" : "notLeap"}.jpg')`;
   message.innerHTML = `${isLeapyear ?  `Yes, ${submitInput} is a Leap Year.` : `No, ${submitInput} is not a Leap Year.`}`;
   message.style.backgroundColor = `${isLeapyear ? "green" : "red"}`;
   message.style.color = `${!isLeapyear && "white"}`;
   message.style.display ="block";
   card.style.paddingTop = "55px"
}



