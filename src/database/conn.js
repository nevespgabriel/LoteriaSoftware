import mongoose from "mongoose";
import "dotenv/config"

const main = async () => {
    try{
        await mongoose.connect(process.env.MONGODB + process.env.DATABASE);
        console.log("Conectado com sucesso");
    } catch(error){
        console.log(error);
    }
}

main();

export default mongoose;