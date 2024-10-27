export class Storage {
    static set(keyName, value) {
        localStorage.setItem(keyName, value)
    }

    static get(keyName) {
        if (localStorage?.getItem(keyName)) {
            return localStorage.getItem(keyName)
        }
        return null
    }

    static remove(keyName) {
        if (localStorage.getItem(keyName)) {
            return localStorage.removeItem(keyName)
        }
        return null
    }
}

