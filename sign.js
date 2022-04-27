const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const ec = new EC('secp256k1');

// TODO: fill in your hex private key
const privateKey = "b7a6e92d8c6f74d8be707702fc6219b29b84c25887efa970997d9af44c1e5ab6";

const key = ec.keyFromPrivate(privateKey);

// TODO: change this message to whatever you would like to sign
const message = "I am Kit, in the ChainShot Bootcamp";

const msgHash = SHA256(message);

const signature = key.sign(msgHash.toString());

console.log({
  message,
  signature: {
    r: signature.r.toString(16),
    s: signature.s.toString(16)
  }
});
