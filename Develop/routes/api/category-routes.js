const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories -- ✅
  try {
    const catagoryData = await Category.findAll({
      include: [{ association: Product }],
    });
    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }

  // be sure to include its associated Products -- ✅
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value -- ✅
  try {
    const catagoryData = await Category.findByPk(req.params.id, {
      include: [{ association: Product }],
    }); //The findByPk method obtains only a single entry from a table, using the provided primary key.

    if (!catagoryData) {
      res.status(404).json({ message: 'No id found of catagory!' });
      return;
    }

    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }

  // be sure to include its associated Products -- ✅
});

router.post('/', async (req, res) => {
  // create a new category -- ✅
  try{
    const catagoryData = await Category.create(req.body); 
    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(400).json(err);
    
  }
});

router.put('/:id', async (req, res) => {
  try{
    const catagoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!catagoryData[0]) {
      res.status(404).json({ message: 'There is no category with id' });
      return;
    }
    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);

  }

  // update a category by its `id` value -- ✅
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value -- ✅
  try{
    const catagoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (!catagoryData[0]) {
      res.status(404).json({ message: 'There is no category with id' });
      return;
    }
      res.status(200).json(catagoryData);
    } catch (err) {
      res.status(500).json(err);
  
    }
  });

module.exports = router;
