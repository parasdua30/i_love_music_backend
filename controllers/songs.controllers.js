export const songsByGenre = async (req, res) => {
    let id = req.params.genre;
    let url = "https://spotify23.p.rapidapi.com/genre_view/?id=";
    console.log(url);

    url = url + id;
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
