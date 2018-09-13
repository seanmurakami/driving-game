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
}

var $image = document.createElement('img')
$image.setAttribute('src', 'https://opengameart.org/sites/default/files/simple-travel-car-top_view.svg')
document.body.appendChild($image)

var car1 = new Car($image, 1, 'north', [0, 0])

document.addEventListener('keydown', function (e) {
  if (e.keyCode == '38') {
    car1.turn('north')
  }
  if (e.keyCode == '40') {
    car1.turn('south')
  }
  if (e.keyCode == '37') {
    car1.turn('west')
  }
  if (e.keyCode == '39') {
    car1.turn('east')
  }
})
