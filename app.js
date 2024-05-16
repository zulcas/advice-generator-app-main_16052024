// ¡Buena suerte!

//Program variables
button = document.querySelector(".card__dice");

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
    displayAdvice (data.slip.id, data.slip.advice);
    
};

function displayAdvice (id, advice){
    document.querySelector('#advice-id').textContent = id;
    document.querySelector('.card__quote').textContent = advice;
}
