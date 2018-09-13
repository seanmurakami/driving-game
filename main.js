class Car {
  constructor ($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}

var $image = document.createElement('img')
$image.setAttribute('src', 'https://images.fastcompany.com/upload/tesla-model-s-top-down.jpg')
document.body.appendChild($image)

var car1 = new Car($image, 1, 'north', [0, 0])

console.log(car1)
