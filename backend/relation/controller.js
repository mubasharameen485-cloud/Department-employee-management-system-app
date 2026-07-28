const { Department, Employee } = require("./model");

// ================= DEPARTMENT API =================
exports.addDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json({ success: true, data: department });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json({ success: true, data: departments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ================= EMPLOYEE API (RELATION LOGIC) =================
exports.addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    // Populate Department (name aur floor)
    const employees = await Employee.find().populate("department", "name floor");
    
    // YAHAN GHARTI THI: data: books likha tha pehle, ab employees kar diya hai
    res.status(200).json({ success: true, data: employees }); 
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};