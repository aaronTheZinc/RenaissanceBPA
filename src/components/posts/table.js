import React from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Event",
    dataIndex: "Event",
    key: "Event",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "About",
    dataIndex: "about",
    key: "about",
  },
  {
    title: "Date",
    key: "tags",
    dataIndex: "date",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Applies To",
    key: "applies",
    dataIndex: "applies",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = "red"
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data = [
  {
    key: "1",
    Event: "John Brown",
    applies: ["Aaron Marsh","Aaron Marsh"],
    about: "Sheeessssssh",
    date: ["April 9, 2021"],
  },
  {
    key: "2",
    Event: "Jim Green",
    applies: ["Aaron Marsh", "Aaron Marsh"],
    about: "Sheeessssssh",
    date: ["April 9, 2021"],
  },
  {
    key: "3",
    Event: "Joe Black",
    applies: ["Aaron Marsh", "Aaron Marsh"],
    about: "Sheeessssssh",
    date: ["April 9, 2021"],
  },
];
export default function table() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
