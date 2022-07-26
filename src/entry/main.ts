import { logger } from 'lib/logger';
import { sum } from 'features/main';

logger(`main, sum: ${sum(1, 2)}`);
logger('main, run');
