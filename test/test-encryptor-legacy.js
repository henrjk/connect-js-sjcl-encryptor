/* eslint-env jasmine */
/* eslint-disable quotes */

import * as encryptor from '../src/encryptor-sjcl'

describe('test encryptor-sjcl module', () => {
  describe('test decrypt with well known values', () => {
    let result = {}
    let decrypt_input = {
      secret: '88e2a5baf63abbab21b422133a7dc4716f7030d7dab48707e27c477b2d3a9d73',
      encrypted: '{"iv":"m9YjZ/HOrjVEhrtrIvnngw==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"/9cYqWfQ7mU=","ct":"ZcXucBukW58GwjCVhvg="}'
    }

    beforeEach(done => {
      encryptor.decrypt(decrypt_input).then(r => {
        result.plaintext = r
        done()
      }).catch(err => {
        result.err = err
        done()
      })
    })
    it('should not report an error', () => {
      expect(result.err).not.toBeDefined()
    })
    it('should have expected values', () => {
      expect(result.plaintext).toEqual('secret')
    })
  })
})
