const express = require('express');
const router = express.Router();
const {
  getAllTorneios,
  getTorneioById,
  createTorneio,
  updateTorneioStatus,
  deleteTorneio
} = require('../controllers/database');

router.get('/torneios', getAllTorneios);
router.get('/torneios/:id', getTorneioById);
router.post('/torneios', createTorneio);
router.patch('/torneios/:id/status', updateTorneioStatus);
router.delete('/torneios/:id', deleteTorneio);

module.exports = router;