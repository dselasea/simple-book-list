import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg",
  author: "Julia Donaldson",
  title: "Room on the Broom",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51qNkKlcbnL._AC_UL200_SR200,200_.jpg",
  author: "Alice Schertle",
  title: "Little Blue Truck's Halloween",
};
const thirdBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
  author: "Ann Whitford Paul",
  title: "If Animals Kissed Good Night",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      />
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
      <Book
        img={thirdBook.img}
        author={thirdBook.author}
        title={thirdBook.title}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Book Image" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
