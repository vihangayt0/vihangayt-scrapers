

async function j(){
  const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://cyberx:x+y=zabc@cluster0.virjwii.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
await client.connect();
const database = client.db('myDatabase');
const collection = database.collection('myCollection');
await collection.insertOne({ key: 'myKey', value: 'myValue' });
const result = await collection.findOne({ key: 'myKey' });
console.log(result.value); // will log 'myValue'

}
j()
