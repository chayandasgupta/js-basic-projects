const colors = ['#11FFBD', '#e74c3c', '#4B1248', '#F0C27B', '#FF4E50', '#F9D423', '#7B920A', '#BB377D', '#3f4c6b', '#FFAFBD', '#A8CABA', '#faaca8', 'linear-gradient(to right, #616161, #9bc5c3)', 'linear-gradient(to right, #c04848, #480048)'];

const btn   = document.getElementById('btn');
const color = document.querySelector('.sub-text-color');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.background = colors[randomNumber];
    // When we want that , the color code is auto generate then apply this code
    // document.body.style.background = '#' + Math.random().toString(16).substring(9);
    color.textContent = colors[randomNumber];
});

function getRandomNumber()
{   
    // work with fixed item
    return Math.floor(Math.random() * colors.length)
    // Automatic color code generate
    // return Math.random().toString(16).substring(9);
}
