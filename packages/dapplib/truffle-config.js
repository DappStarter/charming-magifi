require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember promote guess enroll olympic genius'; 
let testAccounts = [
"0x0c0678f43ae6593555e7f36c6b23f228112f247751630329d309b95bb81d5d3f",
"0xc52b4789b8f0e58dea441d6dc037c6978b8166fbc9b9f61552ffd07538b82a22",
"0x5e2cb53f1ea67c326713ac676cca66b8e0a92abfb174b7a4919210bb451b9a7c",
"0x07c7457e470bbd25629a875a56bffc4bea42aaa51be13c4138e6a49f658d720a",
"0xd4691c696209cfacbb39181568a9325669081308bad931e553cffa4a6af1d21f",
"0x22b8473c817bf25fa7f243d16ed1a94546de3f2a19fd07220b07d438a268a13f",
"0xfdb0887170171e99150afdcebc03100aba6684e6aa1dc218c2088302d664564f",
"0xf767448e89e756dde08182aac71200d438cd44d6fb7e0109c91135698325820c",
"0xc996833b9ee33e0f4a0da5239a55f2929cfbb605d05f7e7425916df059595fcb",
"0x3e7e6b3852ead21a7d11c3364703ae69ebfa1fe4dca58c711309fe69d40a4a6e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

