import { MongoClient, MongoClientOptions } from "mongodb";

const URI: string | undefined = process.env.MONGODB_URI;

const options: MongoClientOptions = {};

if (!URI) {
  throw new Error("Please add your Mongo URI to .env");
}

const client = new MongoClient(URI, options);

let clientPromise: Promise<MongoClient>;


  if (!(global as any)._mongoClientPromise) {
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;


export default clientPromise;
