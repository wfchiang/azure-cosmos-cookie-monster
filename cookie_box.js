
class CookieBox {
    constructor (
        cookies, 
        upDate, 
        downDate) {
        this.id = String(downDate), 
        this.cookies = cookies; 
        this.dates = {
            up: upDate, 
            down: downDate
        }; 
    }
}

module.exports = CookieBox; 