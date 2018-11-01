const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

let opacity = 'ff'

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', ()=>{
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
})

let objectsOnCanvas = []

const colors = [
	'#FFF',
	'#B2DFDB',
	'#00695C',
	'#009688'
]

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}

function getRandomInteger(min, max) {
  return Math.random() * (max - min) + min
}

function distance(x1, y1, x2, y2, r1 = 0, r2 = 0) {
	return Math.pow(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2), .5) - r1 - r2
}

function animate() {
	let gradient = c.createLinearGradient(0, 0, canvas.width, canvas.height)
	gradient.addColorStop(0, '#1E323C' + opacity)
	gradient.addColorStop(1, '#182227' + opacity)
	c.fillStyle = gradient
	c.fillRect(0, 0, canvas.width, canvas.height)

	requestAnimationFrame(animate)

	objectsOnCanvas.forEach(p => p.update())
}

animate()

function changeOpacity(newValue) {
	opacity = newValue.length == 1 ? 0 + newValue : newValue
	return `New colors are #1E323C${opacity} and  #182227${opacity}`
}