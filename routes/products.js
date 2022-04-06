const { Router } = require("express");
const router = Router();
const productsController = require("../controllers/products")
router.post('/create', productsController.create)
//2 cases
router.get('/', productsController.getAllProducts)
// 2 cases: delete all or only one 
router.delete('/', productsController.deleteAll)
//remove and deletebyid concepts
router.delete('/:id', productsController.deleteById)

router.put('/:id', productsController.update)

module.exports = router;