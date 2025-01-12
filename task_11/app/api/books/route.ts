import { NextResponse } from "next/server";

// Simulate a database (in-memory)
const books = [
  {
    id: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    available: true,
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    available: true,
  },
  {
    id: 3,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    available: true,
  },
  {
    id: 4,
    title: "Dare to Lead ",
    author: "Brené Brown",
    available: true,
  },
  {
    id: 5,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    available: true,
  },
  {
    id: 6,
    title: "Digital Fortress",
    author: "Dan Brown",
    available: true,
  },
  {
    id: 7,
    title: "Start with Why",
    author: "Simon Sinek",
    available: true,
  },
  {
    id: 8,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    available: true,
  },
  {
    id: 9,
    title: "The Eight",
    author: "Katherine Neville",
    available: true,
  },
  {
    id: 10,
    title: "The Rule of Four",
    author: " Ian Caldwell & Dustin Thomason",
    available: true,
  },
];

export async function GET() {
  try {
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching books" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title, author, available } = await request.json();

    // Generate a new ID for the book (simple method)
    const newBook = {
      id: books.length + 1,
      title,
      author,
      available,
    };

    // Add the new book to the "database"
    books.push(newBook);

    return NextResponse.json(newBook, { status: 201 }); // Status 201 means created
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding new book" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { id, title, author, available } = await request.json();

    // Find the book by ID
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      return NextResponse.json(
        { message: "Book not found" },
        { status: 404 }
      );
    }

    // Update the book details
    books[bookIndex] = { id, title, author, available };

    return NextResponse.json(books[bookIndex], { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating the book" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    // Find and remove the book by ID
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      return NextResponse.json(
        { message: "Book not found" },
        { status: 404 }
      );
    }

    books.splice(bookIndex, 1);

    return NextResponse.json({ message: "Book deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting the book" },
      { status: 500 }
    );
  }
}

