import combineRouters from 'koa-combine-routers';

import pingRouter from './ping/ping';
import messageRouter from './user/message';
import leaveRouter from './user/leave';

const router = combineRouters(
    pingRouter,
    messageRouter,
    leaveRouter,
);

export default router;
