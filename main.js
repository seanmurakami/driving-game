class Car {
  constructor ($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}

var $image = document.createElement('img')
$image.setAttribute('src', 'https://opengameart.org/sites/default/files/simple-travel-car-top_view.svg')
document.body.appendChild($image)

var car1 = new Car($image, 1, 'north', [0, 0])

console.log(car1)
