const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const ec = new EC('secp256k1');

// TODO: fill in the public key points
const publicKey = {
  x: "693923e839b34992f360c9a97aadecc8a020276c7078858a278b67bca374cfbb",
  y: "587b17e5eeb7a98806fcd4c3b7a740cc74b3aee5b2e8945ae39b926efb45a570"
}

const key = ec.keyFromPublic(publicKey, 'hex');

// TODO: change this message to whatever was signed
const msg = "I am in the ChainShot Bootcamp, my name is Ahsan";
const msgHash = SHA256(msg).toString();

// TODO: fill in the signature components
const signature = {
  r: "e1ffcf81a6e580ffe72616abb4f882d02e04a277e0b9c41f98361f11d2e52ab8",
  s: "4f04ab0aaaf914bfeca4e1025b32bf80040c8f10afc09c3404a77681e927ea15"
};

console.log(key.verify(msgHash, signature));
