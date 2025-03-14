const Speaker = require('../model/speaker.model');

exports.createSpeaker = async (req, res) => {
  try {
    console.log("req",req.body)
      const {  name, email, youTubeLink, instagramLink, TwitterLink, LinkedinLink, BioGraphy, phone, registeredAt,type, isActive } = req.body;
      console.log("name, email, youTubeLink, instagramLink, TwitterLink, LinkedinLink, BioGraphy, phone, registeredAt,type, isActive",name, email, youTubeLink, instagramLink, TwitterLink, LinkedinLink, BioGraphy, phone, registeredAt,type, isActive)
      const img = req.file ? req.file.path : ''; // Get file path from Multer

      // if ( !name || !email || !youTubeLink || !instagramLink || !TwitterLink || !LinkedinLink || !BioGraphy || !phone || !registeredAt || isActive === " ") {
      //     return res.status(400).json({ message: 'All required fields must be provided.' });
      // }

      const newSpeaker = new Speaker({
          name,
          img,
          email,
          youTubeLink,
          instagramLink,
          TwitterLink,
          LinkedinLink,
          BioGraphy,
          phone,
          registeredAt,
          type,
          isActive,
      });

      const savedSpeaker = await newSpeaker.save();

      res.status(201).json({
          message: "Speaker created successfully",
          speaker: savedSpeaker,
      });
  } catch (err) {
      res.status(500).json({
          message: "Failed to create speaker",
          error: err.message,
      });
  }
};

exports.getAllSpeakers=async(req,res)=>{
  try {
  const data=  await Speaker.find({})
    return res.status(200).json({
      status:200,
      data:data
    })
  } catch (err) {
      res.status(500).json({
          message: "Failed to create speaker",
          error: err.message,
      });
  }
}



exports.getSpeakerById = async (req, res) => {
  try {
    const speaker = await Speaker.findById(req.params.id);
    if (!speaker) {
      return res.status(404).json({ message: "Speaker not found" });
    }
    res.status(200).json(speaker);
  } catch (err) {
    res.status(500).json({
      message: "Failed to retrieve speaker",
      error: err.message,
    });
  }
};

exports.updateSpeaker = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      // Store only the filename, not the full path
      updateData.img = req.file.filename;
    }

    const updatedSpeaker = await Speaker.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedSpeaker) {
      return res.status(404).json({ message: "Speaker not found" });
    }

    res.status(200).json({
      message: "Speaker updated successfully",
      speaker: updatedSpeaker,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to update speaker",
      error: err.message,
    });
  }
};

exports.deleteSpeaker = async (req, res) => {
  try {
    const deletedSpeaker = await Speaker.findByIdAndDelete(req.params.id);

    if (!deletedSpeaker) {
      return res.status(404).json({ message: "Speaker not found" });
    }

    res.status(200).json({
      message: "Speaker deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to delete speaker",
      error: err.message,
    });
  }
};
