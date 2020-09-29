class Eating {
    constructor (
        cookie_box_id, 
        cookie_token, 
        eating_time, 
        monster
    ) {
        this.cookie = String(cookie_box_id) + ' # ' + String(cookie_token);  
        this.eating_time = eating_time; 
        this.monster = {
            name: monster.name, 
            phone: monster.phone, 
            email: monster.email 
        }; 
    }
}

module.exports = Eating; 