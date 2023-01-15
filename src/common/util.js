export function isNullorEmpty(val) {
    if (typeof(val) === 'string') {
        val = val.trim()
    }
    return (typeof(val) === 'undefined' || val === null || val === '' || val === 0)
}