import mitt, { type Emitter } from 'mitt';

/** 全局公共事件需要在此处添加类型 */
type Events = {};
export const emitter: Emitter<Events> = mitt<Events>();
