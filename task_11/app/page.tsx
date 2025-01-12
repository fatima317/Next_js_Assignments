"use client"
import { useState, useEffect } from "react";

// Define the types for book
interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

const HomePage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    available: true,
  });

  // Fetch the books when the page loads
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  // Handle adding a new book
  const handleAddBook = async () => {
    const res = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    const addedBook = await res.json();
    setBooks([...books, addedBook]); // Update the state with the new book
    setNewBook({ title: "", author: "", available: true }); // Clear the form
  };

  // Handle deleting a book
  const handleDeleteBook = async (id: number) => {
    const res = await fetch("/api/books", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      setBooks(books.filter((book) => book.id !== id)); // Remove the deleted book from state
    }
  };

  // Handle updating a book
  const handleUpdateBook = async (id: number) => {
    const updatedBook = { ...newBook, id };
    const res = await fetch("/api/books", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });

    const updatedBookData = await res.json();
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, ...updatedBookData } : book
      )
    );
    setNewBook({ title: "", author: "", available: true }); // Clear the form
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Books List</h1>

      {/* Form for adding a new book */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Add a New Book</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="checkbox"
          checked={newBook.available}
          onChange={() =>
            setNewBook({ ...newBook, available: !newBook.available })
          }
          className="mb-2"
        />
        <label className="ml-2">Available</label>
        <button
          onClick={handleAddBook}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          Add Book
        </button>
      </div>

      {/* List of books */}
      <div className="space-y-4">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="border p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <p className="text-gray-700">{book.author}</p>
                <p className="text-sm">{book.available ? "Available" : "Not Available"}</p>
              </div>

              <div className="space-x-2">
                <button
                  onClick={() => handleUpdateBook(book.id)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBook(book.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
