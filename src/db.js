const {MongoClient}=require("mongodb");

const URI ="mongodb+srv://username:password@cluster1.3jtkpvm.mongodb.net/"
const client = new MongoClient(URI)
const DBName = "Users";
async function main(){
    await client.connect();
    console.log("We have sucessfully connected with the DB");

    const db = client.db(DBName);
    const collection = db.collection("users");

    // Read the data 
    const findResult= await collection.find({}).toArray();
    // console.log("Found Document" + findResult);
    
// Get the Count of the Document
    const responce = await collection.countDocuments();
    // console.log(responce);
    
//  Find The Document individually



// Find All the Doucment with the Filter
const responceFilter=await collection.find({type:"donut"}).toArray()
console.log(responceFilter);

    // Insert the Data 
    const data=[ {
    id: "0004",
    type: "donut",
    name: "Strawberry Frosted",
    ppu: 0.65,
    inStock: true,
    quantity: 120
  },
  {
    id: "0005",
    type: "donut",
    name: "Boston Cream",
    ppu: 0.70,
    inStock: false,
    quantity: 0
  },
  {
    id: "0006",
    type: "cookie",
    name: "Oatmeal Raisin",
    ppu: 0.60,
    inStock: true,
    quantity: 200
  }];
//   const innerResult = await collection.insertMany(data);
//   console.log("Inserted the Data Sucessfully" + innerResult);
  
    return "DONE BRO"
}
main().then(console.log).catch(console.error).finally(()=>{
    client.close()
})
