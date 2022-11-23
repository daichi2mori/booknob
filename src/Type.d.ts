import { Book, Author, User } from '@prisma/client';

type BookWithAuthor = Book & { author: Author };

type Book = Book;

type Author = Author;

type User = User;