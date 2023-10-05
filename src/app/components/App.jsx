import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./action";

function App() {
  const dispatch = useDispatch();

  const { data, error, status } = useSelector((state) => state.post);

  const handlePhotos = () => {
    dispatch(getPhotos());
  };

  const handleData = () => {
    dispatch(getPhotos());
    console.log(data);
  };

  if (status === "loading") {
    return <h1>Loading ...</h1>;
  }

  if (status === "error") {
    return <h1>Something Went Wrong</h1>;
  }

  return (
    <div className="bodyContainer">
      <h1>Photo Search App</h1>

      <div className="photoContainer">
        <input type="text" placeholder="Search Photo" className="inputText" />

        <button onClick={handlePhotos}>Search Photos</button>

        <button onClick={handleData}>Get Photos</button>

        <div className="photoWrapper"></div>
      </div>
    </div>
  );
}

export default App;
