const { execFile } = require("child_process");
const path = require("path");
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

        const pdfPath = path.resolve(req.file.path);
        const parserPath = path.join(__dirname, "../../python-parser/parser.py");

        execFile(
            "python",
            [parserPath, pdfPath],
            { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 },
            (error, stdout, stderr) => {

                if (error) {
                    console.error(stderr);
                    return res.status(500).json({
                        error: error.message
                    });
                }

                res.status(201).json({
                    message: "Resume uploaded successfully",
                    resume: result.rows[0],
                    extractedText: stdout
                });
            }
        );

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

module.exports = {
    uploadResume
};