class parcticle {
	constructor() {
		this.radius = Math.floor(Math.random() * 5) + 3
		this.x = getRandomInteger(this.radius, canvas.width - this.radius)
		this.y = getRandomInteger(this.radius, canvas.height - this.radius)

		this.velocity = {
			x: Math.random() * 0.2 - 0.1,
			y: Math.random() * 0.2 - 0.1
		}

		this.color = getRandomColor()
		this.count = 0
	}

	draw() {
		c.beginPath()
		c.fillStyle = this.color
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
		c.fill()
		c.closePath()
	}

	drawLine(x, y) {
		c.beginPath()
		c.strokeStyle = this.color
		c.lineWidth = 3
		c.moveTo(this.x, this.y)
		c.lineTo(x, y)
		c.stroke()
		c.closePath()
	}

	update() {
		this.x += this.velocity.x
		this.y += this.velocity.y

		objectsOnCanvas.forEach( obj => {
			if (distance(this.x, this.y, obj.x, obj.y, this.radius, obj.radius) < 100 && this.color == obj.color)
				this.drawLine(obj.x, obj.y)
		})

		this.velocity.x = this.x - this.radius < 0 || this.x + this.radius > canvas.width ? -this.velocity.x : this.velocity.x
		this.velocity.y = this.y - this.radius < 0 || this.y + this.radius > canvas.height ? -this.velocity.y : this.velocity.y

		this.draw()
	}
}

for (let i = 0; i < 50; i++)
	objectsOnCanvas.push(new parcticle())