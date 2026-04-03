import { deliveryClient, managementClient } from "../../config/contentful";

// export const getPlayers = async () => {
//   const data = await deliveryClient.getEntries({
//     content_type: "chessDatabase",
//   });
//   return data;
// };
export const PAGE_SIZE = 5;
export const getPlayers = async (page = 1) => {
  const skip = (page - 1) * PAGE_SIZE;

  const data = await deliveryClient.getEntries({
    content_type: "chessDatabase",
    limit: PAGE_SIZE,
    skip,
    order: "fields.name",
  });

  return data;
};

export const addPlayers = async (name, rating, grade) => {
  const entry = await managementClient.entry.create(
    { contentTypeId: "chessDatabase" },
    {
      fields: {
        name: { "en-US": name },
        rating: { "en-US": Number(rating) },
        grade: { "en-US": grade },
      },
    },
  );

  await managementClient.entry.publish({ entryId: entry.sys.id }, entry);
  return entry;
};

export const deletePlayer = async (entryId) => {
  try {
    await managementClient.entry.unpublish({ entryId });
  } catch (error) {
    console.log("Entry may already be unpublished", error);
  }

  await managementClient.entry.delete({ entryId });
};
