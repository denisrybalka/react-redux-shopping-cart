import React from 'react'
import { connect } from 'react-redux';
import { addBook, deleteBook, deleteAllBooks } from './../store/actions';

const Cart = ({ shoppingCart, addBook, deleteBook, deleteAllBooks, totalPrice }) => {

    const renderCartItems = shoppingCart.map(item => {
        return (
            <li className="row" key={item.id} style={{margin:'20px'}}>
                <span className="col-6">{item.author} | {item.title}</span>
                <span className="col-1">{item.count}</span>
                <div className="col-2">
                    <button className="btn btn-warning" onClick={() => deleteBook(item)}>-</button>
                    <button className="btn btn-success" onClick={() => addBook(item)}>+</button>
                    <button className="btn btn-danger" onClick={() => deleteAllBooks(item)}>x</button>
                </div>
                <h6 className="col-2">Price: {item.price}$</h6>
            </li>
        )
    })

    return (
        <React.Fragment>
        
            { totalPrice > 0 && <h5 className="text-right">Total price: {totalPrice}$</h5> }

            <ul className="card">
                { renderCartItems }
            </ul>

        </React.Fragment>
    )
}

const mapStateToProps = ({ shoppingCart, totalPrice }) => {
    return {
        shoppingCart, totalPrice
    }
}

const mapDispatchToProps = {
    addBook, deleteBook, deleteAllBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
