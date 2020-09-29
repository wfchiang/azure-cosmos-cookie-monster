
class CookieBox {
    constructor (
        cookies, 
        upYear, upMonth, upDay, 
        downYear, downMonth, downDay) {
        this.id = String(new Date(downYear, downMonth, downDay)), 
        this.cookies = cookies; 
        this.dates = {
            up: new Date(upYear, upMonth, upDay), 
            down: new Date(downYear, downMonth, downDay)
        }; 
    }
}

module.exports = CookieBox; 