import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPost(res.data))
      .catch((err) => console.log("Couldn't fetch data ", err));
  }, []);

  return (
    <div>
      <h1>This is useEffect example with API.</h1>
      <h2>
        WE are going to fetch data from JSONPlaceholder and display the data.
      </h2>
      <ol>
        {/* {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}  // If we use {} then it is necessary to give return statement but using () is more comfortable*/}

        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffectAPI;
