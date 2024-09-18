import Competitor from "../../database/models/competitor_model";

const store = async (req, res) => {
    try{
        await Competitor.create(req.body);
        res.json();
    } catch(error){
        res.status(400).json(error);
    }
}

const index = async (req, res) => {
    try{
        const content = await Competitor.find(req.query).exec();
        res.json(content);
    } catch(error){
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try{
        const content = await Competitor.findById(req.params.id).exec();
        res.json(content);
    } catch(error){
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try{
        await Competitor.findByIdAndUpdate(req.params.id).exec();
        res.json();
    } catch(error){
        res.status(400).json();
    }
};

const destroy = async (req, res) => {
    try{
        await Competitor.findByIdAndDelete(req.params.id).exec();
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