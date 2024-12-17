import { MongoClient } from "mongodb";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const client = await MongoClient.connect(config.mongoUri);
  const db = client.db(config.mongoDb);
  const questions = (await db.collection("questions").find().toArray());
  client.close();

  return questions;
});
