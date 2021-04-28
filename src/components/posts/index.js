import React, { useEffect, useState } from "react";
import PostCard from "./post-card";
import { getPost } from "../utils/airtable";
import { Card } from "semantic-ui-react";

export default function Post() {
  const [post, setPost] = useState([]);

  useEffect(async () => {
    const postsResult = await getPost();
    !post ? console.log("Error Occured") : setPost([]);
    setPost(postsResult);
  }, []);
  return (
    <div>
      <section className='content-container'>
        <Card.Group>
          {post.map((post) => (
            <PostCard post={post} />
          ))}
        </Card.Group>
      </section>
    </div>
  );
}
