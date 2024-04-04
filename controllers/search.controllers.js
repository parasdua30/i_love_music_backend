export const search = async (req, res) => {
    let q = req.params.q;
    let url = "https://spotify23.p.rapidapi.com/search/?q=";
    url += q;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.RAPID_KEY_ID,
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};
