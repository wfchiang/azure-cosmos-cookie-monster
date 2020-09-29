const CookieBox = require('./cookie_box'); 

class CookieMonster {
    constructor (
        cosmosClient, 
        databaseId, 
        cookiesContainerId, 
        monstersContainerId) {
        this.cosmosClient = cosmosClient; 
        this.databaseId = databaseId; 
        this.cookiesContainerId = cookiesContainerId; 
        this.monstersContainerId = monstersContainerId; 

        this.db = null; 
        this.cookiesContainer = null;
        this.monstersContainer = null; 

        this.errorMessage = undefined; 
    }

    async init () {
        this.db = this.cosmosClient.database(this.databaseId); 
        this.cookiesContainer = this.db.container(this.cookiesContainerId);
        this.monstersContainer = this.db.container(this.monstersContainerId);    
    }

    async addCookieBox (cookieBox) {
        let res = await this.cookiesContainer.items.create(cookieBox); 
        return res; 
    }

    async eatCookie (eating) {
        let res = await this.monstersContainer.items.create(eating); 
        return res; 
    }
} 

module.exports = CookieMonster; 