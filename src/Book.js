import React from "react";

const Book = props => {
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
};

export default Book;
