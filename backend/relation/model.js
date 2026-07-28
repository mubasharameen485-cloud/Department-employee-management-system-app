const mongoose = require("mongoose");

// --- 1. AUTHOR SCHEMA ---
const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  floor: { type: Number }
});
const Department = mongoose.model("Department", DepartmentSchema);

// --- 2. BOOK SCHEMA (Relation yahan hai) ---
const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
 salary: { type: Number, required: true },
  
  department: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Department", 
    required: true 
  }
});
const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = { Department, Employee };