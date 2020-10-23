const CosmosClient = require('@azure/cosmos').CosmosClient; 

const CookieMonster = require('./cookie_monster'); 
const CookieBox = require('./cookie_box'); 
const Eating = require('./eating');
const Cookie = require('./cookie');
const Monster = require('./monster');
const Timing = require('./timing')

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
    dbConfig.containerIds.monsters, 
    dbConfig.containerIds.cookie_boxes, 
    dbConfig.containerIds.eating_histories
); 

cookieMonster.init(); 

let monster = new Monster('weifan.wf@gmail.com'); 
// cookieMonster.addMonster(monster).then(
//     res => {
//         console.info('Monster added: ' + monster); 
//     }, 
//     err => {
//         console.error('Failed to add monster: ' + monster); 
//     }
// );

let cookies = [new Cookie('A1'), new Cookie('B1')]; 
// cookies.forEach(c => cookieMonster.addCookie(c).then(
//     res => {
//         console.info('Cookie added: ' + c); 
//     },
//     err => {
//         console.error('Failed to add cookie: ' + c); 
//     }
// )); 

let creation_time = new Date(2020, parseInt(6)-1, 2, 0, 0, 0, 0); 
let expiration_time = new Date('2020', parseInt('06')-1, '09', 23, 59, 59, 999);  
let timing = new Timing(creation_time, expiration_time); 
let cookieBox = new CookieBox(
    cookies, 
    timing); 
cookieMonster.addCookieBox(cookieBox).then(
    res => {
        console.info('CookieBox added: ' + cookieBox); 
    }, 
    err => {
        console.error('Failed to add cookieBox: ' + cookieBox); 
        console.error(err);
    }
); 

// cookieMonster.addCookieBox(cookieBox).then(
//     res => {
//         console.info('Cookie box created');
//         console.info(res);  

//         let eating = new Eating(
//             res.resource.id, 
//             res.resource.cookies[0], 
//             new Date('2020', parseInt('06')-1, '09', 12, 0, 0, 0),
//             {
//                 name: 'Wei-Fan Chiang', 
//                 phone: '(801) 717-8054', 
//                 email: 'weifan.wf@gmail.com'
//             }
//         ); 
        
//         cookieMonster.eatCookie(eating).then(
//             res => {
//                 console.info('Create eaten'); 
//                 console.info(res); 
//             }, 
//             err => {
//                 console.error('Cookie gone...'); 
//                 console.error(err); 
//             }
//         ); 
//     }, 
//     err => {
//         console.error('Cookie box creation failed'); 
//         console.error(err); 
//     }
// ); 


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