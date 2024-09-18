import Match from "../../database/models/Match_model";

const store = async (req, res) => {
    try{
        await Match.create(req.body);
        res.json();
    } catch(error){
        res.status(400).json(error);
    }
}

const index = async (req, res) => {
    try{
        const content = await Match.find(req.query).exec();
        res.json(content);
    } catch(error){
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try{
        const content = await Match.findById(req.params.id).exec();
        res.json(content);
    } catch(error){
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try{
        await Match.findByIdAndUpdate(req.params.id).exec();
        res.json();
    } catch(error){
        res.status(400).json();
    }
};

const destroy = async (req, res) => {
    try{
        await Match.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch(error){
        res.status(400).json();
    }
}

export default {
    store, 
    index,
    show,
    update,
    destroy
}