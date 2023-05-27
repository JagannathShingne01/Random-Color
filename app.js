const getColor = () => {
     const randomNumber = Math.floor(Math.random() * 16777215); //this multiplication of randomnumber will create hexadecimalcode number
     const randomCode ="#" + randomNumber.toString(16);   //hexadecimal code
     console.log(randomNumber, randomCode);
     document.body.style.backgroundColor = randomCode;
     document.getElementById("color-code").innerText = randomCode;

     navigator.clipboard.writeText(randomCode);//for hexacode copy to clipboard
}

//event call
document.getElementById("btn").addEventListener(
   "click",
   getColor
)

//initial call
getColor();