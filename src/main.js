import e from "express";
import user_router from "./http/routes/user_router.js" 
import roulette_bet_router from "./http/routes/roulette_bet_router.js"
import "dotenv/config";
const app = e();

app.use(e.json());

app.use("/user", user_router);
app.use("/roulette_bet", roulette_bet_router);

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at ${process.env.API_PORT} port.`);
});