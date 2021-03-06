import { serializeStyles } from '@emotion/serialize'
import { emotionCache } from '.';

function insertWithoutScoping(cache, serialized) {
    if (cache.inserted[serialized.name] === undefined) {
        return cache.insert('', serialized, cache.sheet, true)
    }
}

export const createGlobalStyle = (...styles) => ({
    functional: true,

    render(_: any, { parent, data }) {
        const cache = emotionCache
        const mergedProps = { ...data.attrs, ...parent.$evergarden }
        const serialized = serializeStyles(styles, cache.registered, mergedProps)
        insertWithoutScoping(cache, serialized)
    }
})