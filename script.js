class Users {
    constructor(containerId) {
        this.container = document.getElementById(containerId);

        this.users = {
            results: []
        };

        this.init();
    }
    init() {
        this.fetchUsers();
        this.render();
    }

    mypromise() {
        cosnt inStorehouse = true;
        const menu = ['sandwich', 'soup', 'drink];
const order = 'soup'

        const getMyOrder = new Promise((resolve, reject => {

        }))
    }

    fetchUsers() {
        fetch('https://randomuser.me/api/?results= 5&gender=female')
            .then(response => {
                console.log('mam odpowiedź')
                console.log(response)
                return response.json()
            })
            .then(data => {
                this.users = data
                this.render();
            })
            .catch(error => {
                console.warn('mam błąd :(')
            })

    }
    render() {
        const row = document.createElement('ul');
        if (!this.users.results) {
            return
        }
        this.users.results.forEach(elem => {
            const div = document.createElement('div');
            div.innerHTML = `
            <h2>${elem.name.first} ${elem.name.last}</h2>
            <img src = ${elem.picture.thumbnail} ${elem.cell}/>
            <hr/>`
            row.appendChild(div);
        });
        this.container.appendChild(row);
    }
}

const list = new Users('root');