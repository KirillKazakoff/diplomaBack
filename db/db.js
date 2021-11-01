/* eslint-disable class-methods-use-this */
import initData from './dbInit';

class Db {
    constructor() {
        this.messagesData = initData;
        this.initLazy();
    }

    initLazy() {
        this.startI = this.messagesData.length - 5;
        this.length = this.messagesData.length;

        this.stop = false;
    }

    addFileData(msgData) {
        this.messagesData.push(msgData);
        console.log(this.messagesData);
    }

    getAllFilesData() {
        return this.messagesData;
    }

    getFilesDataLazy() {
        if (this.stop) return false;

        if (this.startI < 0) {
            this.startI = 0;
            this.stop = true;
        }

        const sendPack = [];

        for (let i = this.startI; i < this.length; i += 1) {
            if (!this.messagesData[i]) break;
            sendPack.push(this.messagesData[i]);
        }

        this.startI -= 5;
        this.length -= 5;

        return sendPack;
    }
}

const db = new Db();
export default db;
