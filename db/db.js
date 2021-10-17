/* eslint-disable class-methods-use-this */
import initData from './dbInit';

class Db {
    constructor() {
        this.messagesData = initData;
        this.lazyIndex = 0;
    }

    addFileData(msgData) {
        this.messagesData.push(msgData);
    }

    getFilesData() {
        return this.messagesData;
    }

    getFilesDataLazy() {
        const sendPack = [];
        for (let i = 0; i < 10; i += 1) {
            sendPack.push(this.messagesData[i]);
        }
        return sendPack;
    }
}

const db = new Db();
export default db;
