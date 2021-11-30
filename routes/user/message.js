import multer from 'koa-multer';
import koaBody from 'koa-body';
import Router from 'koa-router';
import db from '../../db/db';

const router = new Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

// post router
router.post('/message/sendFileData', koaBody(), async (ctx) => {
    ctx.response.body = 'hello';
    const msgData = ctx.request.body;

    db.addFileData(msgData);
});

router.post('/message/sendFile', upload.single('file'), async (ctx) => {
    try {
        ctx.response.body = 'Heilo';
    } catch (e) {
        ctx.response.body = e;
        ctx.response.status = '400';
    }
});

// get router
router.get('/message/getFilesData', async (ctx) => {
    ctx.response.body = db.getFilesDataLazy();
});

router.get('/message/getAllFilesData', async (ctx) => {
    ctx.response.body = db.getAllFilesData();
});

router.get('/message/getFilesDataFiltered/:filter', async (ctx) => {
    const { filter } = ctx.params;
    const result = db.getFilesDataFiltered(filter);
    // console.log(db.messagesData);
    // console.log(result);
    ctx.response.body = result;
});

export default router;
