const pool = require("../config/db");

const uploadResume = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        const result = await pool.query(
            `INSERT INTO resumes (user_id, file_name, file_path)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [
                req.user.id,
                req.file.filename,
                req.file.path
            ]
        );

        res.status(201).json({
            message: "Resume uploaded successfully",
            resume: result.rows[0]
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports = {
    uploadResume
};