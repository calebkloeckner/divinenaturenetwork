const router = require("express").Router();
const sermonsController = require("../../controllers/sermonsController");

// Matches with "/api/books"
router.route("/")
  .get(sermonsController.findAll)
  .post(sermonsController.create);

router.route("/video")
  .get(sermonsController.findAll)
  .post(sermonsController.create);

router
  .route("/:id")
  .get(sermonsController.findById)
  .put(sermonsController.update)
  .delete(sermonsController.remove);




module.exports = router;
