const express = require('express');
let router = express.Router();
let PlansController = require('../controllers/PlansController');

// rotas de planos
router.get('/plans',PlansController.Index);


// rotas de admin
router.get('/admin/plans',PlansController.ListAll);
router.get('/admin/plans/create', PlansController.Create);
router.post('/admin/plans/store', PlansController.Store);

module.exports = router;