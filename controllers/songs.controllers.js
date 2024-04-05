export const song = async (req, res) => {
    let id = req.params.songid;
    let url = "https://spotify23.p.rapidapi.com/tracks/?ids=";
    url = url + id;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "53fbc72dd4mshbf745c915ea0b25p157b1ejsn17637b6218dc",
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const dataSet = {
            image: result.tracks[0].album.images[0].url,
            name: result.tracks[0].name,
            artists: result.tracks[0].album.artists,
            track: result.tracks[0].preview_url,
        };

        res.status(200).json(dataSet);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};
