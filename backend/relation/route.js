const express = require("express");
const router = express.Router();

// Controller se chaaron functions import kar rahe hain
const {
  addDepartment,
  getDepartments,
  addEmployee,
  getEmployees
} = require("./controller");

// ==========================================
// AUTHORS ROUTES
// ==========================================
router.route("/departments")
  .post(addDepartment)    // Naya author add karne ke liye
  .get(getDepartments);   // Saare authors laane ke liye

// ==========================================
// BOOKS ROUTES
// ==========================================
router.route("/employees")
  .post( addEmployee)      // Nayi book add karne ke liye
  .get(getEmployees);     // Saari books laane ke liye (with Author populate)

module.exports = router;