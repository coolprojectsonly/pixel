import { createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "pexels";

export const getPhotos = createAsyncThunk("/post/getPhotos", async () => {
  const client = createClient(
    "S4juiUSszZG9cz4l6qcxQYQiKPQgsw4dmeX3eMX90KFsDHUhuKyhVcFZ"
  );
  const query = "Nature";

  const data = await client.photos
    .search({ query, per_page: 1 })
    .then((photos) => photos);

  // const { photos } = await client.photos.search({ query, per_page: 1 });

  return data;
});
