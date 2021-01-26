class Carousel{

  // class carousel constructor
  constructor (slide) {
    this.slide = slide
    let children = [].slice.call(slide.children)
    this.currentItem = 0
    this.root = this.createDivWithClass("carousel")
    this.container = this.createDivWithClass("carousel_container")
    this.root.appendChild(this.container)
    this.slide.appendChild(this.root)
    this.items = children.map((child) => {
      let item = this.createDivWithClass("carousel_item")
      item.appendChild(child)
      this.container.appendChild(item)
      return item
    })
    this.setStyle()
    this.createNavigation()
  }

  // method for change div for class "className"
  createDivWithClass (className){
    let div = document.createElement("div")
    div.setAttribute("class", className)
    return div
  }

  // method for number and size of items
  setStyle () {
    let ratio = this.items.length / 4
    this.container.style.width = (ratio * 100) + "%"
    this.items.forEach(item => item.style.width = ((100 / 4) / ratio) + "%")
  }

  // method for create next and prev button
  createNavigation  () {
    let nextButton = this.createDivWithClass("carousel_next")
    let prevButton = this.createDivWithClass("carousel_prev")
    this.root.appendChild(nextButton)
    this.root.appendChild(prevButton)
    nextButton.addEventListener("click", this.next.bind(this))
    prevButton.addEventListener("click", this.prev.bind(this))
  }

  // method for use next and prev button
  next () {this.gotoItem(this.currentItem + 1)}
  prev () {this.gotoItem(this.currentItem - 1)}
  gotoItem (index) {
    if (index < 0) {
      index = this.items.length - 4
    } else if (index >= this.items.length || this.items[this.currentItem + 4] 
      === undefined && index > this.currentItem) {index = 0}
    let translateX = index * -100 / this.items.length
    this.container.style.transform = "translate3d(" + translateX + "%, 0, 0)"
    this.currentItem = index
  }
}

// create carousel
new Carousel(document.querySelector("#carousel1"))
new Carousel(document.querySelector("#carousel2"))
new Carousel(document.querySelector("#carousel3"))
new Carousel(document.querySelector("#carousel4"))

