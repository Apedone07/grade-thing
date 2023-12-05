document.querySelector('form').addEventListener('submit', checkGrade);

function checkGrade(e) {
    e.preventDefault();

    let myGrade = document.querySelector('input').value;
    let message = '';

    console.log('running' + myGrade);

    if (myGrade >= 90 && myGrade <= 100) 
    {
        message = "You have an A";
    } 
    else if (myGrade >= 80 && myGrade <= 89)
    {
        message = "You have a B";
    } 
    else if (myGrade >= 70 && myGrade <= 79)
    {
        message = "You have a C";
    } 
    else if (myGrade >= 60 && myGrade <= 69) 
    {
        message = "You have a D";
    } 
    else if (myGrade < 60 && myGrade >= 0) 
    {
        message = "You have an F";
    }

    document.querySelector('#output').innerHTML = message;
}