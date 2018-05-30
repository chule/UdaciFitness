export const RECIVE_ENTRIES = 'RECIVE_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'

export function receiveEntries (entries) {
    return {
        type: RECIVE_ENTRIES,
        entries
    }
}

export function addEntry (entry) {
    return {
        type: ADD_ENTRY,
        entry
    }
}