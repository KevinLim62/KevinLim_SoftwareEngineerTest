const baseURL = "https://fakerapi.it/api/v1/books";

export async function getAllBooks() {
  try {
    const result = await fetch(baseURL);
    return await result.json();
  } catch (error: any) {
    throw new Error("Error fetching books");
  }
}
