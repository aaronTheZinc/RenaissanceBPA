import React, { useEffect, useState } from "react";
import PostCard from "./post-card";
import { getPost } from "../utils/airtable";
import { Card } from "semantic-ui-react";
import Table from "./table";

export default function Post() {
  const [post, setPost] = useState([]);

  useEffect(async () => {
    const postsResult = await getPost();
    !post ? console.log("Error Occured") : setPost([]);
    setPost(postsResult);
  }, []);
  return (
    <div>
      <section className="content-container">
          <section style={{margin:'auto'}}>
          <Card.Group>
          {post.map((post) => (
            <PostCard post={post} />
          ))}
        </Card.Group>
          </section>
        <div style={{marginTop: '10vh'}}>
        <Table />
        </div>
      </section>
    </div>
  );
}
