async function addController(req, res) {
    const { first, second } = req.body

    //validate request
    if (!first || !second) {
        return res.status(404).json({ "result": null });
    }

    try {
        ans = first + second
        return res.status(200).json({ "result": ans });
    } catch (e) {
        return res.status(500).json({ "result": null });
    }
}

async function subtractController(req, res) {
    const { first, second } = req.body

    //validate request
    if (!first || !second) {
        return res.status(404).json({ "result": null });
    }

    try {
        ans = first - second
        return res.status(200).json({ "result": ans });
    } catch (e) {
        return res.status(500).json({ "result": null });
    }
}

module.exports = {
    addController,
    subtractController
}