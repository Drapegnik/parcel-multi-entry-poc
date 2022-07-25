import { logger } from './shared/lib';

const sum = (a: number, b: number) => a + b;

logger(`main, sum: ${sum(1, 2)}`);