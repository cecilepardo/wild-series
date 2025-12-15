// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  res.json(categories);
};

const read: RequestHandler = (req, res) => {
  const categoryId = Number(req.params.id);
  const category = categories.find((c) => c.id === categoryId);
  if (category == null) {
    res.sendStatus(404);
    return;
  }
  res.json(category);
};

// Export them to import them somewhere else
export default { browse, read };
