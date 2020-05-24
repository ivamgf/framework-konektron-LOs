// Documentations Controller

const Documentation = `Documentation: requirements specification`;

module.exports = {
    index(req, res) {
        const documentation = Documentation;

        return res.json(documentation);
    }    
};