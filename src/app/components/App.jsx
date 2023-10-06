import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./action";

function App() {
  const dispatch = useDispatch();

  const { data, error, status } = useSelector((state) => state.post);

  const [url, setUrl] = useState();

  const [query, setQuery] = useState("");

  const handlePhotos = () => {
    dispatch(getPhotos({ query }));
  };

  const handleData = () => {
    dispatch(getPhotos());

    setUrl(data?.photos[0]?.src?.large);
    // console.log(data?.photos[0]?.src?.small);
  };

  if (status === "error") {
    return <h1>Something Went Wrong</h1>;
  }

  if (status === "loading") {
    return <h1>Loading ...</h1>;
  }

  if (status === "error") {
    return <h1>Something Went Wrong</h1>;
  }

  return (
    <div className="bodyContainer">
      <div className="coverLine1">
        <div className="coverLine2">
          <h1>Photo Search App</h1>

          <div className="photoContainer">
            <input
              type="text"
              placeholder="Search Photo"
              className="inputText"
              onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={handlePhotos}>Search Photos</button>

            <button onClick={handleData}>Get Photos</button>

            {data && (
              <div className="photoWrapper">{url && <img src={url}></img>}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
