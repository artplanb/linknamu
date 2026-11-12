import { MongoClient, type Db } from "mongodb";

const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

// 연결을 재사용해 개발 중 HMR이나 서버리스 환경에서 연결이 계속 늘어나지 않게 합니다.
export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다. .env.local을 확인하세요.");
  }

  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      globalForMongo._mongoClientPromise = undefined;
      throw err;
    });
  }

  const client = await globalForMongo._mongoClientPromise;
  return client.db(process.env.MONGODB_DB ?? "linknamu");
}
