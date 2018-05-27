import { AsincStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY } from './_calendar'

export function submitEntry({ entry, key }) {
    return AsincStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
        [key]: entry
    }))
}

export function removeEntry() {
    return AsincStorage.getItem(CALENDAR_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(reasults)
            data[key] = undefined
            delete data[key]
            AsincStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
        })
}