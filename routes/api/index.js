const router = require("express").Router();
const videoRoutes = require("./videos");

// Video routes
router.use("/", videoRoutes);

module.exports = router;
