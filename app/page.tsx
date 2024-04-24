import Image from "next/image";
import { getAllBooks } from "./lib/action";
import BookCard from "./ui/books/BookCard";
import { Book } from "./lib/type";
import Link from "next/link";

export default async function Home() {
  const books = await getAllBooks();
  return (
    <main className="flex min-h-screen flex-col items-center space-y-5 p-24">
      <div className="text-4xl font-bold text-center">
        Software Engineer Test
      </div>
      <Link href="/book" className="underline text-blue-400 text-lg">
        Redirect to book page
      </Link>
    </main>
  );
}
