let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    time = document.querySelector('.time'),
    gameZone = document.querySelector('.game__zone'),
    score = 0,
    gameTime = 0,
    interval = 0,
    figure = ['treugolnik', 'krug', 'item'];
        
        
btn.addEventListener('click', () => {
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        gameZone.innerHTML = ''
        score = 0
        startGame()
    }else {
        alert('Нужно вести минимум 5 секунд')
    }
})

gameZone.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})


function startGame() {
    time.innerHTML = gameTime
    interval = setInterval(() => decreaseTime(), 1000)
    createBall()
}

function decreaseTime() {
    if(gameTime == 1) {
        time.innerHTML = 0
        endGame()
    }else {
        time.innerHTML = --gameTime
    }
    
}

function endGame() {
    gameZone.innerHTML = `<h2>Вы набрали ${score} баллов</h2>`
    clearInterval(interval)
}


function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let size = random(20, 100)
    // let figure = ['square', 'triangle', 'circle']
    // const figureNum = Math.floor(Math.random() * figure.length)
    
  
    
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.background = getRandomColor()
    ball.classList.add(getrandomfigure())
    console.log(getrandomfigure());
    // console.log(ball.style.borderRadius);
    // if (figureNum == 0) {
    //     ball.style.border = 
    // }
    let coor = gameZone.getBoundingClientRect()
    
    let leftValue = random(0,coor.width - size)
    let topValue  = random(0,coor.height - size)
    
    ball.style.left = leftValue + 'px'
    ball.style.top  = topValue + 'px' 
    
    gameZone.append(ball)
}


function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min )
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getrandomfigure() {
    const num = Math.floor(Math.random() * figure.length);
    const item = figure[num]
    return item
}
// getrandomfigure()
// console.log(getrandomfigure());