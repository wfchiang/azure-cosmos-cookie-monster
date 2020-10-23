const CookieBox = require('./cookie_box'); 

class CookieMonster {
    constructor (
        cosmosClient, 
        databaseId, 
        cookiesContainerId,
        monstersContainerId, 
        cookieBoxesContainerId, 
        eatingHistoriesContainerId) 
    {
        this.cosmosClient = cosmosClient; 
        this.databaseId = databaseId; 
        this.cookiesContainerId = cookiesContainerId; 
        this.monstersContainerId = monstersContainerId; 
        this.cookieBoxesContainerId = cookieBoxesContainerId; 
        this.eatingHistoriesContainerId = eatingHistoriesContainerId; 

        this.db = null; 
        this.cookiesContainer = null; 
        this.monstersContainer = null; 
        this.cookieBoxesContainer = null; 
        this.eatingHistoriesContainer = null; 
    }

    async init () {
        this.db = this.cosmosClient.database(this.databaseId); 
        this.cookiesContainer = this.db.container(this.cookiesContainerId); 
        this.monstersContainer = this.db.container(this.monstersContainerId); 
        this.cookieBoxesContainer = this.db.container(this.cookieBoxesContainerId); 
        this.eatingHistoriesContainer = this.db.container(this.eatingHistoriesContainerId); 
    }

    async addCookie (cookie) {
        let res = await this.cookiesContainer.items.create(cookie); 
        return res; 
    }

    async addMonster (monster) {
        let res = await this.monstersContainer.items.create(monster); 
        return res; 
    }

    async addCookieBox (cookieBox) {
        let res = await this.cookieBoxesContainer.items.create(cookieBox); 
        return res; 
    }

    async eatCookie (eating) {
        let res = await this.eatingHistoriesContainer.items.create(eating); 
        return res; 
    }
} 

module.exports = CookieMonster; 