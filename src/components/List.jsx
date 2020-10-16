import React from 'react'
import { connect } from 'react-redux'

import Service from '../service';

import { fetchBooks, addBook } from '../store/actions'
import Spinner from './Spinner';

class List extends React.Component {
    
    componentDidMount() {
        const { fetchBooks } = this.props;
        const service = new Service();

        service.getData()
            .then(data => fetchBooks(data));
    }

    render() {
        const { cards, addBook, isLoading } = this.props;

        const renderCards = cards.map(card => {
            return (
            <li className="card" style={{ width: '300px', margin: '20px' }} key={card.id}>
                <div className="card-body">
                    <img className="card-img-top" src={card.src} alt='img'/>
                    <h5 className="card-title">{card.title}</h5>
                    <h6 className="text-muted">{card.author}</h6>
                    <p className="card-text">Price: {card.price}$</p>
                    <button className="btn btn-primary" onClick={() => addBook(card)}>Add to cart</button>
                </div>
            </li>
            )
        })

        return (
            <ul className="row" style={{ margin: '20px' }}>
                { isLoading ? <Spinner/> : renderCards }
            </ul>
        )
    }
}

const mapStateToProps = ({ cards, isLoading, shoppingCart }) => {
    return {
        cards, isLoading, shoppingCart
    }
}

const mapDispatchToProps = {
    fetchBooks, addBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
