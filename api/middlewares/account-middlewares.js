const Account = require('../accounts/account-model');

const validateAccountId = async (req, res, next) => {
    const { id } = req.params
    try {
        const account = await Account.getById(id);
        if(!account) {
            res.status(404).json({ message: `Account with ID ${id} does not exist.` })
        } else {
            req.account = account;
            next();
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const validateAccount = (req, res, next) => {
    const name = req.body.name
    const budget = req.body.budget
    if (!name || !budget) {
        res.status(400).json({ message: 'Please provide name and budget for account.' })
    } else {
        next();
    }
};

module.exports = {
    validateAccountId,
    validateAccount
}