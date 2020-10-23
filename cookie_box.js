
class CookieBox {
    constructor (
        cookies, 
        timing) 
    {
        this.cookies = cookies;
        this.timing = timing; 
    }

    toString() {
        return JSON.stringify(this, '    '); 
    }
}

module.exports = CookieBox; 