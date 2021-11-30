import initData from './dbInit';

class Db {
    constructor() {
        this.messagesData = [];
        this.initLazy();
    }

    initLazy() {
        this.startI = this.messagesData.length - 5;
        this.length = this.messagesData.length;
        this.stop = false;
        this.finalStop = false;
    }

    addFileData(msgData) {
        this.messagesData.push(msgData);
        console.log(this.messagesData);
    }

    getAllFilesData() {
        return this.messagesData;
    }

    getFilesDataFiltered(filter) {
        if (filter === 'all') return this.messagesData;
        return this.messagesData.filter((msgData) => msgData.name.includes(filter));
    }

    getFilesDataLazy() {
        if (this.finalStop) return false;

        if (this.startI < 0) {
            this.startI = 0;
            this.stop = true;
        }

        const sendPack = [];

        for (let i = this.startI; i < this.length; i += 1) {
            if (!this.messagesData[i]) break;
            sendPack.push(this.messagesData[i]);
        }

        if (this.stop) {
            this.finalStop = true;
            return sendPack;
        }

        this.startI -= 5;
        this.length -= 5;

        return sendPack;
    }
}

const db = new Db();
export default db;
