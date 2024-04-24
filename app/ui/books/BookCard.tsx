"use client";

import { Book } from "@/app/lib/type";
import { dateFormat } from "@/app/lib/utils";
import Link from "next/link";

type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-slate-200 p-10">
      <div className="flex flex-col justify-start items-start space-y-2">
        <div className=" font-medium text-left text-2xl underline">
          {book.title}
        </div>
        <div className="font-base text-left text-xl">{book.author}</div>
        <div className="font-light text-lg space-y-3">
          <p>Genre: {book.genre}</p>
          <p>Description: {book.description}</p>
          <p>ISBN: {book.isbn}</p>
          <p>Published: {dateFormat(book.published)}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
