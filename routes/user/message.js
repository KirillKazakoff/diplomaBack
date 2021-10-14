import path from 'path';
import multer from 'koa-multer';
import koaBody from 'koa-body';
import Router from 'koa-router';
import db from '../../db/db';

const router = new Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => {
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// post router
router.post('/message/sendFileData', koaBody(), async (ctx) => {
    console.log(ctx.request.body);
    console.log(ctx.request.type);
    const { message } = ctx.request;
    ctx.response.body = 'hello';
    // db.addMessage(message);
});

router.post('/message/sendFile', upload.single('file'), async (ctx) => {
    try {
        ctx.response.body = 'Heilo';
    } catch (e) {
        console.log(e);
    }
});

// get router
router.get('/message/getFilesData', async (ctx) => {
    ctx.response.body = db.getMessagesData();
});

// router.get('/message/getFile/:id', async (ctx) => {
//     const { id } = ctx.params;
//     ctx.response.body = db.getFile(id);
// });

export default router;
