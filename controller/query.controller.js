const Query = require("../model/query.model");

exports.createQuery = async (req, res) => {
  try {
    const newQuery = new Query({
      name: req.body.name,
      Designation: req.body.Designation,
      companyName: req.body.companyName,
      Contact: req.body.Contact,
      email: req.body.email,
      website: req.body.website,
    });

    const savedQuery = await newQuery.save();

    res.status(201).json({
      message: "Query created successfully",
      query: savedQuery,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to create query",
      error: err.message,
    });
  }
};

exports.getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 }); // -1 for descending order
    res.status(200).json(queries);
  } catch (err) {
    res.status(500).json({
      message: "Failed to retrieve queries",
      error: err.message,
    });
  }
};


  exports.getQueryById = async (req, res) => {
    try {
      const query = await Query.findById(req.params.id);
      if (!query) {
        return res.status(404).json({ message: "Query not found" });
      }
      res.status(200).json(query);
    } catch (err) {
      res.status(500).json({
        message: "Failed to retrieve query",
        error: err.message,
      });
    }
  };
  exports.updateQuery = async (req, res) => {
    try {
      const updatedQuery = await Query.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return the updated document
        runValidators: true, // Validate the update
      });
  
      if (!updatedQuery) {
        return res.status(404).json({ message: "Query not found" });
      }
  
      res.status(200).json({
        message: "Query updated successfully",
        query: updatedQuery,
      });
    } catch (err) {
      res.status(500).json({
        message: "Failed to update query",
        error: err.message,
      });
    }
  };

  exports.deleteQuery = async (req, res) => {
    try {
      const deletedQuery = await Query.findByIdAndDelete(req.params.id);
  
      if (!deletedQuery) {
        return res.status(404).json({ message: "Query not found" });
      }
  
      res.status(200).json({
        message: "Query deleted successfully",
      });
    } catch (err) {
      res.status(500).json({
        message: "Failed to delete query",
        error: err.message,
      });
    }
  };
  