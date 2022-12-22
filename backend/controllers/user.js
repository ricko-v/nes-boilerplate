import db from "../config/db";

const tes = async (req, res) => {
    try {
        res.json({
            message: 'hit api'
        });
    } catch (e) {
        res.json({
            message: e.toString()
        })
    }
}

export { tes }