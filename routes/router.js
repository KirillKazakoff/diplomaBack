import combineRouters from 'koa-combine-routers';

import pingRouter from './ping/ping';
import messageRouter from './user/message';

const router = combineRouters(
    pingRouter,
    messageRouter,
);

export default router;
