import mongoose from "mongoose";

const mongoDB = "mongodb+srv://nevespgabriel:95135759@cluster0.kykoa.mongodb.net/"
const database = "lionsbet";

const main = async () => {
    try{
        await mongoose.connect(mongoDB + database);
        console.log("Conectado com sucesso");
    } catch(error){
        console.log(error);
    }
}

main();

export default mongoose;