window.addEventListener('mousemove', event => {
	objectsOnCanvas.push(new smallPoint(event.x, event.y))
})

class smallPoint {
	constructor(x, y) {
		this.x = x + Math.floor(Math.random() * 20 - 10)
		this.y = y + Math.floor(Math.random() * 20 - 10)
		this.dx = (Math.random() * 4 - 2) / 10
		this.dy	= (Math.random() * 4 - 2) / 10
		this.dr = (Math.random() + 1) / 40
		this.r = Math.random() * 3 + 2
		this.color = getRandomColor()
	}

	draw() {
		c.beginPath()
		c.fillStyle = this.color
		c.arc(this.x, this.y, this.r, 0, Math.PI*2)
		c.fill()
		c.closePath()
	}

	update() {
		this.x += this.dx
		this.y += this.dy
		this.r -= this.dr
		if (this.r < 0.4) {
			objectsOnCanvas.forEach((p, i) => this == p ? this.i = i : -1)
			delete objectsOnCanvas[this.i]
		}
		this.draw()
	}
}