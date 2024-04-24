import { getAllBooks } from "@/app/lib/action";
import { Book } from "@/app/lib/type";
import BookCard from "@/app/ui/books/BookCard";

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const books = await getAllBooks();
  const selectedBook: Book[] = books.data.filter(
    (book: Book) => book.id === +params.id
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-4xl text-center">
        {selectedBook[0].title}
      </h1>
      <BookCard book={selectedBook[0]} />
    </main>
  );
}
