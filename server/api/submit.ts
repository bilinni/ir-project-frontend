import { MongoClient } from "mongodb";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  if (
    !body.user ||
    !Array.isArray(body.answers)
  ) {
    return {
      success: false,
      error: "Invalid payload: Must include 'user', 'answers'",
    };
  }

  let client;

  try {
    client = await MongoClient.connect(config.mongoUri, {
    });

    const db = client.db(config.mongoDb);

    const resultDocument = {
      user: body.user, 
      answers: body.answers, 
      metadata: {
        timestamp: new Date(), 
      },
    };
    const result = await db.collection("results").insertOne(resultDocument);

    return {
      success: true,
      insertedId: result.insertedId,
    };
  } catch (error) {
    console.error("Error saving to MongoDB:", error);

    return {
      success: false,
      error: (error instanceof Error) ? error.message : "An unknown error occurred",
    };
  } finally {
    if (client) {
      await client.close();
    }
  }
});
