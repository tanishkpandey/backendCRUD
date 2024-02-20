const express = require("express");
const router = express.Router();

const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// to get all the user
router.get("/", getContacts);

// to create user
router.post("/", createContact);

// to get any one on the basis of ID
router.get("/:id", getContact);

// to update user on the basis of ID
router.put("/:id", updateContact);

// to delete user on the basis of ID
router.delete("/:id", deleteContact);


module.exports = router;
