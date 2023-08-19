// base64.js

const b64 = require('js-base64').Base64


function EncodeString(src) {
    return b64.encode(src)
}

function DecodeString(src) {
    return b64.decode(src)
}

export default {
    EncodeString, DecodeString
}
