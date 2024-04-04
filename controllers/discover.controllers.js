export const discover = async (req, res) => {
    const url = "https://spotify23.p.rapidapi.com/browse_all/";

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.RAPID_KEY_ID,
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};
