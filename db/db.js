/* eslint-disable class-methods-use-this */
import initData from './dbInit';

class Db {
    constructor() {
        this.messagesData = initData;
    }

    addMessageData(msgData) {
        this.messagesData.push(msgData);
        console.log(this.messagesData);
    }

    getMessagesData() {
        return this.messagesData;
    }
}

const db = new Db();
export default db;
