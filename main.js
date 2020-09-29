const CosmosClient = require('@azure/cosmos').CosmosClient; 

const CookieMonster = require('./cookie_monster'); 
const CookieBox = require('./cookie_box'); 

const dbConfig = require('./db_config'); 

const cosmosClient = new CosmosClient({
    endpoint: dbConfig.host, 
    key: dbConfig.authKey 
}); 

// Ref: https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-application

let cookieMonster = new CookieMonster(
    cosmosClient, 
    dbConfig.databaseId, 
    dbConfig.containerIds.cookies, 
    dbConfig.containerIds.monsters
); 

cookieMonster.init(); 

let cookieBox = new CookieBox(
    ['C0', 'C101'], 
    '2020', '09', '25', 
    '2020', '09', '27'
);

console.info('This is your cookie-box'); 
console.info(cookieBox); 
console.info(typeof cookieBox.id); 

cookieMonster.addCookieBox(cookieBox); 

// let queryPromise = container.items.create({
//     tokens: ['C0', 'C1', 'C2'],
//     dates: {
//         up: '2020-09-25',
//         down: '2020-09-30'
//     }
// });

// queryPromise.then(
//     rel => {
//         console.info('Create Good'); 
//     }, 
//     err => {
//         console.error('Create Failed'); 
//         console.error(err); 
//     }
// ); 

// dbPromise.then(
//     function(rel) {
//         console.info("DB Connection Successful..."); 
//         let db = rel.database; 

//         let containerPromise = db.containers.createIfNotExists({
//             id: dbConfig.containerIds.resources
//         });

//         containerPromise.then(
//             function(rel) {
//                 console.info("Container connection Successful..."); 

//                 let container_resources = rel.container; 

//                 let queryPromise = container_resources.items.create({
//                     tokens: 'C0,C1,C2', 
//                     upDate: '2020-09-25', 
//                     downDate: '2020-09-29'
//                 }); 

//                 queryPromise.then(
//                     function(rel) {
//                         console.info('Query Result...'); 
//                         console.info(rel);
//                     }, 
//                     function(err) {
//                         console.info('Query Failed'); 
//                     }
//                 ); 
//             }, 
//             function(err) {
//                 console.info("Container Connection Failed"); 
//             }
//         ); 
//     }, 
//     function(err) {
//         console.info("DB Connection Failed..."); 
//     }); 