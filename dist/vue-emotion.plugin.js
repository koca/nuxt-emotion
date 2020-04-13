import { hydrate } from 'emotion';
if (process.client) {
    const ids = window.$emotionSSRIds;
    hydrate(ids);
}
