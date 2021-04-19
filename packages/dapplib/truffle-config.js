require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind mixture harvest crime outer time'; 
let testAccounts = [
"0x3e012b67887a8af03546d2abf824972ebd9577dfe6750a317c4268100deb46a8",
"0x2a07e83b59f8ca95aae88b040da4ad6baf1a50b1e26969ee42441887da770e41",
"0x1ba1adb8326ce28ceb429f5a1db9ab40b79edaca699e78f232b74e96460dd276",
"0x309077a220227b322a9de0758ca4df9d74a7d8d63eb71834ffe152ed5122b97b",
"0x04fa716e5af817b2c4b162069cfc876e260a91eb14d04abf3fc91291184d12df",
"0x0dd2db15b5b2867f009bfcfc98ab8d65f0f1339b433cc07e120cfd116458d3e9",
"0x923ce834cf1d5c5d3319f4728ece13595308b24e5c072241567d170bafcff551",
"0xd70c5bb6d74925ed140845db32d123faa2abe7c64f0ff831a7ed49db371383f0",
"0x1af15f1e3cc46ded078c53467566c8139bd79ccc7e10826e3a3b2a5f1b82b2ca",
"0x51e8bfabf5a6310ec2da707cdba0e773d648916efa956ac3868b9f41a4ecb68e"
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
            version: '^0.5.11'
        }
    }
};
