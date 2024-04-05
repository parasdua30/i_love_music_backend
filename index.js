import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();
const port = 3000;

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("King Is In The Building!");
});

// routes import
import userRouter from "./routes/user.routes.js";
import artistsRouter from "./routes/artists.routes.js";
import albumsRouter from "./routes/albums.routes.js";
import discoverRouter from "./routes/discover.routes.js";
import songsRouter from "./routes/songs.routes.js";
// import searchRouter from "./routes/search.routes.js";

// routes declaration
app.use("/api/user", userRouter);
app.use("/api/discover", discoverRouter);
app.use("/api/artists", artistsRouter);
app.use("/api/albums", albumsRouter);
app.use("/api/songs", songsRouter);

// app.use("/getSongsByGenre", songsRouter); // not working
// app.use("/api/search", searchRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
