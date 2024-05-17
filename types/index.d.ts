declare module 'colorthief';
declare module 'particles.vue3';
declare module 'path-browserify';

// 联合类型转交叉类型
type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;
