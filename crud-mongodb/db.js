require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

//Singleton connection
let singleton;

async function connect(){
    if(!singleton){
        console.log("criando conexão");
        const client = new MongoClient(process.env.MONGO_HOST, {
            auth: {
              username: process.env.MONGO_USER,
              password: process.env.MONGO_PASS
            }
          });
        await client.connect();
        singleton = client.db(process.env.MONGO_DATABASE);
    }
    return singleton;
}

async function insert(customer){
    const db = await connect();
    return db.collection("customers").insertOne(customer);
}

async function find(){
    const db = await connect();
    return db.collection("customers").find().toArray();
}

async function update(id, name){
    const db = await connect();
    return db.collection("customers").updateOne({ _id: new ObjectId(id)}, { $set: {name}});
}

async function remove(id){
    const db = await connect();
    return db.collection("customers").deleteOne({ _id: new ObjectId(id)});
}

module.exports = {
    insert,
    find,
    update,
    remove
}