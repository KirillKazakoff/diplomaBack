import Router from 'koa-router';
import db from '../../db/db';

const router = new Router();
router.post('/leave', async (ctx) => {
    db.initLazy();
    ctx.response.status = 200;
});

export default router;
