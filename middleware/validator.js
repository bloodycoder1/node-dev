const userValidator = (req, res, next) => {
    const userData = req.body;
    if (!userData || !userData.name || !userData.age || !userData.email || !userData.password || !userData.role) {
        return res.status(400).json({ message: "All Fields are required" });
    }
    next();
};

const updateUserValidator = (req, res, next) => {
    const userData = req.body;
    if (!userData || !userData.name || !userData.age) {
        return res.status(400).json({ message: "All Fields are required" });
    }
    next();
};

const roleIdentifier = (req, res, next) => {
    const role = req.headers['role'] || req.body.role;
    if (!role) {
        return res.status(403).json({ message: "Role identifier is required for access" });
    }
    
    // Attach the identified role to the request object
    req.userRole = role; 
    next();
};

module.exports = {
    userValidator,
    updateUserValidator,
    roleIdentifier
};
