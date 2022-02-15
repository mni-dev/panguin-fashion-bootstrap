function headChange(){
    const changeHeading = document.getElementById('top-heading');
    const headingText = changeHeading.innerText;
    const currentText = 'I AM THE PENGUIN'
    changeHeading.innerText = currentText;
    console.log(currentText)
    return currentText;
}