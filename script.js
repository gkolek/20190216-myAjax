class Users {
    constructor(containerId) {
        this.container = document.getElementById(containerId)

        this.users = {
            results: [{
                name: 'ala',
                surname: 'makota'
            }]
        }

        this.init()
    }
    init() {
        //this.fetchUsers()
        this.render()
    }

    fetchUsers() {

        //this.render(;)
    }

    render() {
        const ul = document.createElement('ul')
        this.users.results.forEach(elem => {
            const li = document.createElement('li')
            li.innerHTML = $`{elem.name} ${elem.surname}`
            ul.appendChild(li)
            console.log(elem)
        })
        this.container.appendChild(ul)
    }
}

const list = new Users('root')