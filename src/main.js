import e from "express";
import user_router from "./http/routes/user_router.js" 
const app = e();
const port = 3200;

app.use(e.json());

app.use("/user", user_router);

app.listen(port, () => {
    console.log(`Server running at ${port} port.`);
});