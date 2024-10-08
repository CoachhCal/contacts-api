import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contacts route. Test Nodemon');
});

// Get all contacts
router.get('/all', (req, res) => {
  res.send('All contacts');
});

// Get a contact by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send('Contact by id ' + id);
});

router.post('/create', (req, res) => {
  res.send('Create');
})

//update contact by id
router.put('/update/:id', (req, res) => {
  const id = req.params.id
  res.send('Update');
})

//delete contact by id
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  res.send('Delete');
})

// to-do: add post, put, and delete routers


export default router;
