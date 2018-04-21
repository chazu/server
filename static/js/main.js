document.addEventListener('DOMContentLoaded', function() {

    function triggerCurrentlyReadingNav() {
        var currentlyReadingBooksClass = document.getElementsByClassName('currently-reading__item')
        var currentlyReadingCounter = 0
        for (var i = 0; i < currentlyReadingBooksClass.length; i++) {
            currentlyReadingBooksClass[i].style.position = 'absolute'
            currentlyReadingBooksClass[i].style.left = currentlyReadingCounter + 'px'
            currentlyReadingCounter += 205
        }

        var currentlyReadingLeftId = document.getElementById('currentlyReadingLeft')
        var currentlyReadingRightId = document.getElementById('currentlyReadingRight')
        var currentlyReadingListClass = document.getElementsByClassName('currently-reading__list')
        var currentlyReadingAnimationCounter = 0

        currentlyReadingLeftId.onclick = function() {
            if (currentlyReadingAnimationCounter < 0) {
                currentlyReadingAnimationCounter += 205
                currentlyReadingListClass[0].style.left = currentlyReadingAnimationCounter + 'px'
            }
        }

        currentlyReadingRightId.onclick = function() {
            if (((currentlyReadingBooksClass.length - 6) * 205) > -(currentlyReadingAnimationCounter)) {
                currentlyReadingAnimationCounter -= 205
                currentlyReadingListClass[0].style.left = currentlyReadingAnimationCounter + 'px'
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

    var addNewBooksId = document.getElementById('addNewBooks')
    var uploadBooksId = document.getElementById('uploadBooks')

    uploadBooksId.addEventListener("change", uploadBooks, false)

    function uploadBooks(e) {
        e.preventDefault()
        console.log('yes')
    }

    addNewBooksId.onclick = function(e) {
        e.preventDefault()
        uploadBooksId.click()
    }
})