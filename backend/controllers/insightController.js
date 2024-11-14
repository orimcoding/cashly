const generateAIInsights = require('../ai/recommendation');

exports.generateInsights = async (req, res) => {
    try {
        const insights = await generateAIInsights(req.user.id);
        res.json(insights);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
