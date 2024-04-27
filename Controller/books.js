const booksstore = require('../Schemas/Books');

const addbook = async (req, res) => {
  const { title, author, publicaton_years, users } = req.body;
  try {
    if (title && author && publicaton_years && users) {
      const bodydata = {
        title,
        author,
        publicaton_years,
        users,
      };
      const booksdetails = await booksstore.create(bodydata);
      return res
        .status(200)
        .send({ message: 'book was added', data: booksdetails });
    } else {
      return res
        .status(301)
        .send({ message: 'invalid input please!, try again ' });
    }
  } catch (error) {
    return res.status(400).send({ message: 'server error!, please try again' });
  }
};
const updateBook = async (req, res) => {
  const { title, publicaton_years } = req.body;

  try {
    const id = req.params.id;

    const booksdetails = await booksstore.findById(id);
    if (!booksdetails) {
      return res.status(404).send({
        message: 'book is not found, please try again with valid data',
      });
    }
    const newdata = await booksstore.findByIdAndUpdate(
      id,
      { title, publicaton_years },
      { new: true }
    );
    return res.status(200).send({ message: 'book was updated', data: newdata });
  } catch (error) {
    return res.status(400).send({ message: 'server error!, please try again' });
  }
};
const Deletebooks = async (req, res) => {
  try {
    const id = req.params.id;

    const booksdetails = await booksstore.findById(id);
    if (!booksdetails) {
      return res.status(404).send({
        message: 'book is not found, please try again with valid data',
      });
    }
    await booksstore.findByIdAndDelete(id);
    return res.status(200).send({ message: 'book was deleted' });
  } catch (error) {
    return res.status(400).send({ message: 'server error!, please try again' });
  }
};
const getBooks = async (req, res) => {
  try {
    const id = req.params.id;
    const getdata = await booksstore.findById(id).populate('users');
    if (!getdata) {
      return res.status(404).send({ message: 'book not found' });
    }
    return res.status(200).send({ message: 'book fecthed!', data: getdata });
  } catch (error) {
    return res
      .status(400)
      .send({ message: 'server error while fetching books' });
  }
};
const getAllboks = async (req, res) => {
  try {
    const getdata = await booksstore.find().populate('users');

    if (!getdata) {
      return res.status(404).send({ message: 'book not found' });
    }
    return res.status(200).send({ message: 'book fecthed!', data: getdata });
  } catch (error) {
    return res.status(400).send({ message: 'server error to fetching books' });
  }
};
const filterbooks = async (req, res) => {
  try {
    const { author, years } = req.query;

    const publicaton_years = years;

    const filter = {};
    if (author) filter.author = author;
    if (publicaton_years) filter.publicaton_years = publicaton_years;

    const books = await booksstore.find(filter);
    console.log(books);
    res.json(books);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = {
  addbook,
  updateBook,
  getAllboks,
  getBooks,
  filterbooks,
  Deletebooks,
};
