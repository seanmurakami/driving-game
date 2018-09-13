class Car {
  constructor ($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
  turn(direction) {
    this.direction = direction
    this.$img.classList = ''
    this.$img.classList.add(direction)
  }
  move() {
    if (this.direction === 'north') {
      this.location[1] += this.speed
      this.$img.setAttribute('style', 'position: absolute; top: ' + Math.abs(this.location[1])*(4*this.speed) + 'em; left: ' + Math.abs(this.location[0])*(4*this.speed) + 'em')
    }
    if (this.direction === 'south') {
      this.location[1] -= this.speed
      this.$img.setAttribute('style', 'position: absolute; top: ' + Math.abs(this.location[1])*(4*this.speed) + 'em; left: ' + Math.abs(this.location[0])*(4*this.speed) + 'em')
    }
    if (this.direction === 'east') {
      this.location[0] += this.speed
      this.$img.setAttribute('style', 'position: absolute; top: ' + Math.abs(this.location[1])*(4*this.speed) + 'em; left: ' + Math.abs(this.location[0])*(4*this.speed) + 'em')
    }
    if (this.direction === 'west') {
      this.location[0] -= this.speed
      this.$img.setAttribute('style', 'position: absolute; top: ' + Math.abs(this.location[1])*(4*this.speed) + 'em; left: ' + Math.abs(this.location[0])*(4*this.speed) + 'em')
    }
  }
}

var $image = document.createElement('img')
$image.setAttribute('src', 'https://opengameart.org/sites/default/files/simple-travel-car-top_view.svg')
document.body.appendChild($image)

var car1 = new Car($image, 1, 'north', [0, 0])

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 38) {
    car1.turn('north')
    car1.move()
  }
  if (e.keyCode === 40) {
    car1.turn('south')
    car1.move()
  }
  if (e.keyCode === 37) {
    car1.turn('west')
    car1.move()
  }
  if (e.keyCode === 39) {
    car1.turn('east')
    car1.move()
  }
})
