document.addEventListener('DOMContentLoaded', function() {

    function triggerCurrentlyReadingNav() {
        var currentlyReadingBooks = document.getElementsByClassName('currently-reading__item')
        var currentlyReadingCounter = 0
        for (var i = 0; i < currentlyReadingBooks.length; i++) {
            currentlyReadingBooks[i].style.position = 'absolute'
            currentlyReadingBooks[i].style.left = currentlyReadingCounter + 'px'
            currentlyReadingCounter += 205
        }

        var currentlyReadingLeft = document.getElementById('currentlyReadingLeft')
        var currentlyReadingRight = document.getElementById('currentlyReadingRight')
        var currentlyReadingList = document.getElementsByClassName('currently-reading__list')
        var currentlyReadingAnimationCounter = 0

        currentlyReadingLeft.onclick = function() {
            if (currentlyReadingAnimationCounter < 0) {
                currentlyReadingAnimationCounter += 205
                currentlyReadingList[0].style.left = currentlyReadingAnimationCounter + 'px'
            }
        }

        currentlyReadingRight.onclick = function() {
            if (((currentlyReadingBooks.length - 6) * 205) > -(currentlyReadingAnimationCounter)) {
                currentlyReadingAnimationCounter -= 205
                currentlyReadingList[0].style.left = currentlyReadingAnimationCounter + 'px'
            }
        }
    }

    triggerCurrentlyReadingNav()

    fetch('/books')
        .then(function(response) {
            return response.json()
        })
        .then(function(booksJSON) {
            var books = booksJSON['books']
            var booksListHTML = ''

            for (var i = 0; i < books.length; i++) {
                booksListHTML += '<a class="books-container__item" href="' + books[i]['href'] + '"><img src="' + books[i]['src'] + '" alt="' + books[i]['alt'] + '" /></a>'
            }
            
            var booksContainerList = document.getElementsByClassName('books-container__list')
            booksContainerList[0].innerHTML = booksListHTML
        })
})