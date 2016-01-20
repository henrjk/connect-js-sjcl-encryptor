# connect-js-sjcl-encryptor"

This is a fallback encryptor module for a next version of the
Anvil Connect JavaScript Client library.

**CAUTION: This is work in progress. It may go away at any time.**

Work is under way (anvilreasearch/connect-js#7) to implement the browser library to
access Anvil Connect to use the WebCrypto APIs.

The new code structure calls out an encryptor module. Connect-js implementation
will allow to use fallback modules for platforms that do not support webcrypto.

This module is such a fallback module. It essentially contains the
encrypt/decrypt code used previously in connect-js.

## Module

This module is implemented using ES2015.
It uses jspm for executing karma tests.

ES5 CJS modules will likely be made available in due time.

To execute the tests after cloning this repo, the following should work:

```console
$ npm install
$ jspm install
$ npm test
```
