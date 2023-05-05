const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', async(req, res) => {
  // find all categories AND associated Products
  try {
    const categoryData = await Category.findAll({
      include:({ model: Product }),  
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find category by its `id` value and include associated Products
  const categoryData = await Category.findByPk(req.params.id);
  if (!categoryData) {
    res.status(404).json({ message: 'No category found with that id!' });
    return;
  }
  res.status(200).json(categoryData);


});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => {
    res.status(200).json(category);
  }
  )
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  }
  );
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((category) => {
    res.status(200).json(category);
  }
  )
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  }
  );
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((category) => {
    res.status(200).json(category);
  }
  )
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  }
  );
});

module.exports = router;
