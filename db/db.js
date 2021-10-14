/* eslint-disable class-methods-use-this */

class Db {
    constructor() {
        this.messages = {
            files: [],
            messagesData: [],
        };
    }

    addMessage(message) {
        const { file, data } = message;

        this.messages.messagesData.push(data);
        this.messages.files.push(file);
    }

    getMessagesData() {
        return this.messages.messagesData;
    }

    getFile(id) {
        const identificators = this.messages.messagesData.map((data) => data.id);
        const index = identificators.findIndex((dbId) => dbId === id);

        const { files } = this.messages;
        const dbFile = files[index];

        return dbFile;
    }

    // getFiles() {
    //     return this.messages.files;
    // }

    // getMessages() {
    //     return this.messages;
    // }
}

const db = new Db();
export default db;
