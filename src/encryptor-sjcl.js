// see connect-js encryptor-webcrypto.js for API
import sjcl from 'sjcl'
/**
 * Encrypt some plain text with a freshly generated secret.
 *
 * The function returns a promise. The promise resolution is an object
 * containing the secret and the encrypted plaintext.
 * {secret: reduced character set string, encrypted: base64 encoded str}
 *
 * The returned object must be passed into the decrypt method.
 *
 * @param plaintext a string
 * @returns promise
 */
export function encrypt (plaintext) {
  return new Promise(resolve => {
    const random = Math.random().toString(36).substr(2, 10)
    const secret = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(random))
    const encrypted = sjcl.encrypt(secret, plaintext)
    const ret = {secret: secret, encrypted: encrypted}
    // console.log(ret)
    resolve(ret)
  })
}

/**
 * Decrypts string encrypted with encrypt function of this module.
 *
 * Returns a promise.
 * @param secret - as returned by encrypt
 * @param encrypted - as returned by encrypt
 * @returns promise
 */
export function decrypt ({secret, encrypted}) {
  return new Promise(resolve => {
    resolve(sjcl.decrypt(secret, encrypted))
  })
}

/**
 * Compute sha256 digest of string returning hex characters.
 *
 * @param str
 * @returns promise
 */
export function sha256sum (str) {
  return new Promise(resolve => {
    resolve(sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(str)))
  })
}

/**
 * Computes sha256 digest of string returning base64url encoded string
 * @param str
 * @returns promise
 */
export function sha256url (str) {
  return new Promise(resolve => {
    resolve(sjcl.codec.base64url.fromBits(sjcl.hash.sha256.hash(str)))
  })
}

/**
 * Generates nonce for OIDC.
 *
 * This is not a promise.
 *
 * @returns {string}
 */
export function generateNonce () {
  return Math.random().toString(36).substr(2, 10)
}

