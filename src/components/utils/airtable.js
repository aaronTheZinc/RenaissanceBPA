import React from "react";
import airtable from "airtable";
import * as dotenv from "dotenv";

dotenv.config();
const key = process.env.REACT_APP_AIRTABLE_API_KEY;

class Airtable {
  constructor() {
    this.base = new airtable({ apiKey: key }).base("appBJZzT3exv7OBO5");
  }

  getPost = async () => {
    const fetchPost = new Promise((resolve, reject) => {
      this.base
        .table("Announcements")
        .select({
          maxRecords: 60,
          view: "Grid view",
        })
        .eachPage(
          function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            resolve(records);

            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              return;
            }
          }
        );
    });
    const posts = await fetchPost.then((posts) => {
      const filter = (post) => {
        const { Header, Image, Body } = post.fields;
        const Post = {
          header: Header,
          image: Image,
          body: Body,
        };
        return Post;
      };
      const filteredPost = posts.map((postObj) => filter(postObj));
      return filteredPost;
    });
    console.log("Post =>", posts);
    return posts;
  };
}
const { getPost } = new Airtable();
export { getPost };
