const video = document.querySelector('#myVideo')
const btnPlay = document.querySelector('#play')
const btnMute = document.querySelector('#mute')
const videoTitle = ['Victus', 'Victus', 'Victus',]
const videoDesc = ['Тест игр  №1', 'Тест игр  №2', 'Тест игр  №3']
const videoTitleHtml = document.querySelector('.video__title')
const videoTextHtml = document.querySelector('.video__text')
const playList = ['video1', 'video2', 'video3']
let number = 0

function play() {
    console.log('кнопка вклучения')
    if (video.paused === true) {
        video.play()
        btnPlay.textContent = 'Pause'
    } else {
        video.pause()
        btnPlay.textContent = 'Play'
    }
}
function mute() {
    if (video.muted === true) {
        video.muted = false
        btnMute.textContent = 'Off'
    } else {
        video.muted = true
        btnMute.textContent = 'On'
    }
}

function next() {
    if (number < playList.length - 1) {
        number = number + 1
    } else {
        number = 0
    }
    videoTitleHtml.textContent = videoTitle[number]
    videoTextHtml.textContent = videoDesc[number]

    video.src = `video/${playList[number]}.mp4`
}

function prev() {
    if (number > 0) {
        number = number - 1
    } else {
        number = playList.length - 1
    }
    videoTitleHtml.textContent = videoTitle[number]
    videoTextHtml.textContent = videoDesc[number]
    video.src = `video/${playList[number]}.mp4`
}

