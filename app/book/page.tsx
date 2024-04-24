import Link from "next/link";
import { getAllBooks } from "../lib/action";
import { Book } from "../lib/type";
import BookCard from "../ui/books/BookCard";

export default async function Page() {
  const books = await getAllBooks();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-4xl text-center">Book Listing</h1>
      {books.data.map((book: Book) => (
        <div key={book.id} className="flex flex-col py-3">
          <Link href={`/book/${book.id}`}>
            <BookCard book={book} />
          </Link>
        </div>
      ))}
    </main>
  );
}
