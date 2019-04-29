import React from "react";

export default function Article({ article, author }) {
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>
        <a href="{author.website}">
          {author.firstName} {author.LastName}
        </a>
      </div>
      <div>{article.body}</div>
    </div>
  );
}
