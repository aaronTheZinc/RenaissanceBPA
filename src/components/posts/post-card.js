import React from "react";
import "./index.css";
import { Card } from "semantic-ui-react";

const CardExampleHeaderCard = ({ post }) => (
  <div style={{paddingLeft: '5vw'}}>
    <Card.Group >
      <Card>
        <Card.Content>
          <Card.Header>{post.header}</Card.Header>
          <Card.Meta>Co-Worker</Card.Meta>
          <Card.Description>
           {post.body}
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
);

export default CardExampleHeaderCard;
