export function isNullorEmpty(val) {
    if (typeof(val) === 'string') {
        val = val.trim()
    }
    return (typeof(val) === 'undefined' || val === null || val === '' || val === 0)
}

export const validateEmail = (string = '') => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(string)
}

export function generateRandomString(size) {
    let randomString = ''
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

    for ( let i = 0; i < size; i++ ) {
      randomString += characters.charAt(Math.floor(Math.random()*characters.length))
   }
   return randomString
}
