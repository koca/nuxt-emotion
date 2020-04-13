import { hydrate } from 'emotion'

if ((process as any).client) {
    const ids = (window as any).$emotionSSRIds
    hydrate(ids)
}