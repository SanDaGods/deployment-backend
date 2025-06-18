const express = require("express");
const router = express.Router();
const applicantController = require("../controllers/applicantController");
const { applicantAuthMiddleware } = require("../middleware/authMiddleware");
const upload = require("../middleware/fileUpload");

router.post("/api/register", applicantController.register);
router.post("/api/login", applicantController.login);
router.post(
  "/api/submit-documents",
  upload.array("files"),
  applicantController.fileSubmit
);
router.get(
  "/api/fetch-documents",
  applicantAuthMiddleware,
  applicantController.fileFetch
);
router.get("/api/delete-documents", applicantController.fileDelete);
router.post("/api/update-personal-info", applicantController.updateInfo);
router.get(
  "/api/profile/:id",
  applicantAuthMiddleware,
  applicantController.profileId
);
router.get("/applicant/auth-status", applicantController.authStatus);
router.post("/applicant/logout", applicantController.logout);
router.get(
  "/api/fetch-user-files/:userId",
  applicantAuthMiddleware,
  applicantController.fetchUserFiles
);

module.exports = router;
