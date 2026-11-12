import { getDb } from "./mongodb";

type ClickDoc = {
  _id: string; // 링크 id
  count: number;
  updatedAt: Date;
};

async function collection() {
  const db = await getDb();
  return db.collection<ClickDoc>("clicks");
}

export async function incrementClick(linkId: string): Promise<number> {
  const col = await collection();
  const doc = await col.findOneAndUpdate(
    { _id: linkId },
    { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
    { upsert: true, returnDocument: "after" },
  );
  return doc?.count ?? 1;
}

export async function getClickCounts(): Promise<Record<string, number>> {
  const col = await collection();
  const docs = await col.find().toArray();
  return Object.fromEntries(docs.map((d) => [d._id, d.count]));
}
