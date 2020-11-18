document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  let moveButton = document.querySelector('#move-button')

  document.addEventListener("keydown", function(event) {
    let ul = document.querySelector("#moves-container")
    let eventKey = event.key 
    if (event.key.startsWith("Arrow") {
      let li = document.createElement("li")
      li.textContent = eventKey.slice(5).toLowerCase()
      ul.appent(li)
    }
  })

  moveButton.addEventListener("click", function(event) {
    let li = document.querySelector("ul#moves-container li")
    move(li.textContent)
    li.remove()
  })

  ul.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.remove()
    }
  })
// STRATEGY 1 - using setTimeout....complicated
  moveButton.addEventListener("click", function() {
    const list = ul.querySelectorAll('li')
    list.forEach(function(item, index) {
      const direction = item.textContent 
      setTimeout(function() {
        move(direction)
        item.remove()
      }, 500 * (index + 1))
    })
  })

//STRATEGY 2 - using setInterval
  moveButton.addEventListener('click', function() {
    const moveInterval = setInterval(function() {
      if (li) {
      let li = ul.querySelector('li')
      let liText = li.textContent 
      move(liText)
      li.remove()
      } else {
        clearInterval(moveInterval)
      }
    }, 500);
  })


}); //DOMContentLoaded
