import { collection, orderBy, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";
import { useEffect, useState } from "react";

function Posts() {
  const docsRef = collection(db, "post");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(docsRef, orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              image={post.data().image}
              timestamp={post.data().timestamp}
              postImage={post.data().postImage}
            />
          );
        })}
    </div>
  );
}

export default Posts;
