class LocalStorage {
    constructor (name){
        this.name = name;
    }

    save(arr) {
        localStorage.setItem(this.name,JSON.stringify(arr));
    }

    get() {
        return JSON.parse(localStorage.getItem(this.name)) || [];
    }
}
export default LocalStorage;
