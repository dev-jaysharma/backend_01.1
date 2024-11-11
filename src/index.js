import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("MONGO DB CONNECTION FAILED !!!", error);
            throw error;
        });
        app.listen(process.env.PORT || 5173, () => {
            console.log(`Server running on port ${process.env.PORT || 5173}`);
            app.get("/", (req, res) => {
                res.send("Welcome to the API");
            });
        });
    })
    .catch((error) => {
        console.log("Server failed to start", error);
    });

dotenv.config({
    path: "./env",
});
