const keys = document.querySelectorAll('.key')
const audio = document.querySelectorAll('audio')
const keysArr = 'asdfghjkl'.split('')

function playSound(e) {
    // const audio = document.querySelector(`audio[data-key='${e.key}']`)
    keysArr.forEach((key, i) => {
        if (e.key === key) {
            keys[i].classList.add('playing');
            audio[i].currentTime = 0;
            audio[i].play();
        }
    });
}

function removeTransition(e) {
    if (e.propertyName == 'transform') { this.classList.remove('playing') };
}

document.addEventListener('keypress', playSound)

keys.forEach(key => key.addEventListener('transitionend', removeTransition))



