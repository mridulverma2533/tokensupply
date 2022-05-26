const solc = require('solc');
const fs = require('fs');
const express = require("express");
const app =express();
const port = 3000;

const Web3 = require('web3');
const { Contract } = require('web3-eth-contract');

const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/2655813d8ee64745856712337d6f8522"))
let fileContent = fs.readFileSync("contracts/supply.sol").toString();
// let file = fs.readFileSync("contracts/Context.sol").toString();

// console.log(fileContent);

const input = {
    language: 'Solidity',
    sources: {
        "supply.sol":{
            content:fileContent
         },
   
        //  "IContract.sol":{
        //     content:icont
        //  },
        //  "SafeMath.sol":{
        //     content:safe
        //  },
        //  "IUniswapV2Router02.sol":{
        //     content:router2
        //  },
        //  "IUniswapV2Factory.sol":{
        //     content:factory
        //  },
        //  "IUniswapV2Pair.sol":{
        //     content:pair
        //  },

        //  'THeroToken.sol': {
        //     content: thero,
        //  },
        //  'IBEP20.sol': {
        //     content: Ibep,
        //  },
        //  'Context.sol': {
        //     content: file,
        //  },
        //  'IUniswapV2Router02.sol': {
        //     content: router2,
        //  },
        //  "IUniswapV2Router01.sol":{
        //      content:router1
        //  },
        //  "Auth.sol":{
        //     content:auth
        // }
         


    },
    settings: {
       outputSelection: {
          '*': {
             '*': ['*'],
          },
       },
    },
 };
 const output = JSON.parse(solc.compile(JSON.stringify(input)));
//  console.log(output);
//  const ABI = output.contracts["supply.sol"]["supply"].abi
const ABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"string","name":"_name2","type":"string"}],"name":"SetVDex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name1","type":"string"}],"name":"SetVNetwork","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"VDex","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VNetwork","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"towner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

	


//  ABI = output.contracts["0x699a34906dc4725dAE1205AB2B6104e7Ff56BB70"]["WELD"].abi
// const ad =web3.utils.toChecksumAddress("0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31")
// console.log(ad);

//  console.log(ABI);
 
 const contract = new web3.eth.Contract(ABI,"0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31")
//  console.log(contract);
// const data =  contract.methods.totalSupply().call()
// console.log(data);
//  let _marketingAddress="0xc2477DeF7D19937e27A7D010A7Ccc1e5E8333534"
// let _teamAddress="0x0D3e810e251F372E6368f072f1524D716e6d58FF"
module.exports={contract}