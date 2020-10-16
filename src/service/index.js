export default class Service {
    cards = [
        { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', price: 60, id: 1,
        src: 'https://eloquentjavascript.net/img/cover.jpg' },

        { title: 'Functional Web Development with React and Redux', author: 'Eve Porcello', price: 50, id: 2,
        src: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg' },

        { title: 'Grokking Algorithms', author: 'Aditya Bhargava', price: 100, id: 3,
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJDutY9mHO9QigjGhJ2sfuFVTaOiMyBNO0Qi1hHSzk5woEzOd' },
    ]

    getData() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (resolve) {
                    resolve(this.cards);
                } else {
                    reject(new Error('Something went wrong!'))
                }
            }, 1000)
        })
    }
}