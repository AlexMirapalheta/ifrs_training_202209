import mongoose from 'mongoose';

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        return mongoose.connect('mongodb+srv://ifrs:fyMy9vfgb8S2utg3@cluster0.vg3ngck.mongodb.net/?retryWrites=true&w=majority');
        // return mongoose.connect('mongodb://localhost:27017/ifrs');
    }
}

export default new Database();
