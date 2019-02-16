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
    fetchUsers() {
        fetch('https://randomuser.me/api/')
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.users = data
                this.render();
            })

    }
    render() {
        const ul = document.createElement('ul');
        if (!this.users.results) {
            return
        }
        this.users.results.forEach(elem => {
            const li = document.createElement('li');
            li.innerHTML = `${elem.name.first} ${elem.name.last}`;
            ul.appendChild(li);
        });
        this.container.appendChild(ul);
    }
}

const list = new Users('root');