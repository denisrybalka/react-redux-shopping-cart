export const FETCH_BOOKS = 'FETCH_BOOKS';
export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART';
export const DELETE_BOOK_FROM_CART = 'DELETE_BOOK_FROM_CART';
export const DELETE_ALL_BOOKS_FROM_CART = 'DELETE_ALL_BOOKS_FROM_CART';

export function fetchBooks(books) {
    return {
        type: FETCH_BOOKS,
        payload: books,
    }
}

export function addBook(book) {
    return {
        type: ADD_BOOK_TO_CART,
        payload: book,
    }
}

export function deleteBook(book) {
    return {
        type: DELETE_BOOK_FROM_CART,
        payload: book,
    }
}

export function deleteAllBooks(book) {
    return {
        type: DELETE_ALL_BOOKS_FROM_CART,
        payload: book,
    }
}