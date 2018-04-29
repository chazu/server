import React, { Component } from 'react';

const Header = () => {
  return (
    <div className="currently-reading__header">
      <div className="currently-reading__title">Currently reading</div>
        <div className="currently-reading__nav">
          <div className="currently-reading__nav-item" id="currentlyReadingLeft">
            <svg width="28" height="20" viewBox="0 0 33 20" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#676767" strokeWidth="3" fill="none" fillRule="evenodd">
                <path d="M33 10.143H3"></path>
                <path strokeLinecap="square" d="M10.143 17.286L3 10.143 10.143 3"></path>
              </g>
            </svg>
          </div>
          <div className="currently-reading__nav-item" id="currentlyReadingRight">
            <svg width="33" height="20" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="3" stroke="#676767" fill="none" fillRule="evenodd">
                <path d="M0 10h30"/>
                <path strokeLinecap="square" d="M23 3l7 7-7 7"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    )
}

const Item = (props) => {
  return (
    <a className="currently-reading__item" href={props.href}>
      <img src={props.src} title={props.title} alt={props.title} />
    </a>
  );
}

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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {books: []};
  }

  componentDidMount() {
    fetch("/books")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            books: result.books
          });
          triggerCurrentlyReadingNav()
        },
        (error) => {
          alert(error)
        }
      )
  }

  render() {
    const { books } = this.state;
    return (
      <div className="currently-reading">
        <Header />
        <div className="currently-reading__main">
          <div className="currently-reading__list">
            {books.map(book => (
              <Item key={book.src} href={book.href} src={book.src} title={book.title} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;