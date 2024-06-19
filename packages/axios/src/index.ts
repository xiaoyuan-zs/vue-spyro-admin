import axios from 'axios';
import { AxiosConfig } from './service';
import { checkErrorStatus } from './error';
import { retryAxios } from './retryAxios';

export type * from './types';
export { AxiosConfig, axios, checkErrorStatus, retryAxios };
