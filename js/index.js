//use function to change heading text
function headChange(){
    const changeHeading = document.getElementById('top-heading');
    const currentText = 'I AM THE PENGUIN'
    changeHeading.innerText = currentText;
    console.log(currentText)
    return currentText;
}

//log an element using querySelector method
const findIt =document.querySelector(".fw-bolder");
console.log(findIt);
const showIt =document.querySelectorAll("h1");
console.log(showIt);