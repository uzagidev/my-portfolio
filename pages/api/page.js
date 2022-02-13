import { connectToDatabase } from "../../util/mongodb";

export async function getData() {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("general")
    .find({})
    .project({ key: 1, value: 1, _id: 0 })
    .toArray();
  var result = {};
  data.forEach((item) => {
    result[item.key] = item.value;
  });
  return result;
}

export default async function handler(req, res) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}
