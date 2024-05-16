// ¡Buena suerte!

//Program variables
button = document.querySelector(".card__dice");
let id;
let advice;

button.addEventListener('click', getAdvice);


//Function
async function getAdvice(){
    //Call API
    const response = await fetch ('https://api.adviceslip.com/advice');
    console.log(response);
    //Convert JSON
    const data = await response.json();
    console.log(data);
    //Get id and advice
    document.querySelector('#advice-id').textContent = data.slip.id;
    document.querySelector('.card__quote').textContent = data.slip.advice;
};
