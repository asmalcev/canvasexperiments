let center = {
	x: canvas.width / 2,
	y: canvas.height / 2
}

class circleLine {
	constructor() {
		this.distanceFromCenter = Math.floor(Math.random() * 20 - 10)
		this.color = getRandomColor()

		this.radians = Math.random() * Math.PI * 2
		this.velocity = Math.random() * 4 + 1

		this.x = center.x + Math.cos(this.radians) * this.distanceFromCenter
		this.y = center.y + Math.sin(this.radians) * this.distanceFromCenter
	}

	draw() {
		c.beginPath()
		c.fillStyle = this.color
		c.arc(this.x, this.y, 2, 0, Math.PI * 2)
		c.fill()
		c.closePath()
	}

	update() {
		this.distanceFromCenter += this.velocity

		this.x = center.x + Math.cos(this.radians) * this.distanceFromCenter
		this.y = center.y + Math.sin(this.radians) * this.distanceFromCenter

		if (this.x > canvas.width || this.x < 0 || this.y < 0 || this.y > canvas.height)
			this.distanceFromCenter = Math.floor(Math.random() * 20 - 10)

		this.draw()
	}
}

for (let i = 0; i < 200; i++)
	objectsOnCanvas.push(new circleLine())