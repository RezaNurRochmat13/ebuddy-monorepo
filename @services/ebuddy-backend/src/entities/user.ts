class User {
    private id: String;
    private name: String;
    private username: String;
    private password: String;
    private address: String;

    constructor(id: String, name: String, username: String, password: String, address: String) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.address = address;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getAddress() {
        return this.address;
    }

    setId(id: String) {
        this.id = id;
    }

    setName(name: String) {
        this.name = name;
    }

    setUsername(username: String) {
        this.username = username;
    }

    setPassword(password: String) {
        this.password = password;
    }

    setAddress(address: String) {
        this.address = address;
    }

    toObject() {
        return {
            name: this.name,
            username: this.username,
            password: this.password,
            address: this.address,
          };
    }
}

export default User;
