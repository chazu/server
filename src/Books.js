import React, { Component } from 'react';

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
                },
                (error) => {
                    alert(error)
                }
            )
    }

    render() {
        const { books } = this.state;
        return (
            <div class="books-container">
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