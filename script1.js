let z
let y
let a = prompt("Enter you mail:")
let b = prompt("Enter your password:")
let res = document.querySelector('#res')
function pass()
{
    z = document.querySelector('#mail').value
    y = document.querySelector('#pass').value
    if((z==a) && (y==b))
    {
        res.innerHTML = 'Your have login sucessful'
    }
    else
    {
        res.innerHTML = 'Incorrect username or password'
    }
}


