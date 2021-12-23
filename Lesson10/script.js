'use strict'

const books = document.querySelectorAll('.book')
const bodyImage = document.querySelector('body')
const adv = document.querySelector('.adv')
const booktitles = document.querySelectorAll('h2 > a') 
const chapters = document.querySelectorAll('ul > li')
const lists = document.querySelectorAll('ul')
const newChapter = document.createElement('li')

books[0].before(books[1])
books[2].before(books[4])
books[2].before(books[5])
books[5].before(books[3])

bodyImage.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"

adv.remove()

booktitles[4].textContent = "Книга 3. this и Прототипы Объектов"

chapters[2].before(chapters[3])
chapters[2].before(chapters[6])
chapters[2].before(chapters[8])
chapters[2].before(chapters[4])
chapters[2].before(chapters[5])
chapters[2].before(chapters[7])
chapters[2].before(chapters[9])

chapters[48].before(chapters[55])
chapters[48].before(chapters[49])
chapters[48].before(chapters[50])
chapters[51].before(chapters[52])
chapters[51].before(chapters[53])

newChapter.textContent = "Глава 8: За пределами ES6"
lists[2].append(newChapter)
books[2].children[1].children[8].before(books[2].children[1].children[10])
