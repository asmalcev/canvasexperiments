let mouse = {
	x: canvas.width / 2,
	y: canvas.height / 2
}

window.addEventListener('mousemove', event => {
	mouse = {
		x: event.x,
		y: event.y
	}
})

class circleLine {
	constructor() {
		this.distanceFromCenter = getRandomInteger(60, 160)
		this.color = getRandomColor()

		this.radians = Math.random() * Math.PI * 2
		this.velocity = Math.floor(Math.random() * 2 + 1) / 100

		this.x = mouse.x + Math.cos(this.radians) * this.distanceFromCenter
		this.y = mouse.y + Math.sin(this.radians) * this.distanceFromCenter

		this.mouse = {x: mouse.x, y: mouse.y}
	}

	draw(lastPoint) {
		if (opacity == 'ff') {
			c.beginPath()
			c.fillStyle = this.color
			c.arc(this.x, this.y, 2, 0, Math.PI * 2)
			c.fill()
			c.closePath()
		} else {
			c.beginPath()
			c.strokeStyle = this.color
			c.lineWidth = 4
			c.moveTo(lastPoint.x, lastPoint.y)
			c.lineTo(this.x, this.y)
			c.stroke()
			c.closePath()
		}
	}

	update() {
		const lastPoint = {x: this.x, y: this.y}

		this.radians += this.velocity

		this.mouse.x += (mouse.x - this.mouse.x) * .1
		this.mouse.y += (mouse.y - this.mouse.y) * .1

		this.x = this.mouse.x + Math.cos(this.radians) * this.distanceFromCenter
		this.y = this.mouse.y + Math.sin(this.radians) * this.distanceFromCenter

		this.draw(lastPoint)
	}
}

for (let i = 0; i < 150; i++)
	objectsOnCanvas.push(new circleLine())