import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const dbClient = async () => {
  await mongoose.connect(
    `mongodb://harshana:p0Ff9zME4KUfsJTy@ac-vusvzxh-shard-00-00.xexpz34.mongodb.net:27017,ac-vusvzxh-shard-00-01.xexpz34.mongodb.net:27017,ac-vusvzxh-shard-00-02.xexpz34.mongodb.net:27017/?ssl=true&replicaSet=atlas-8pdjjr-shard-0&authSource=admin&appName=Cluster1`,
  );
};
