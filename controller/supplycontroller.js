const conc = require("../contract")
const Web3 = require('web3');

exports.totalsupply=async(req,res)=>{
    try{
        const data = await conc.contract.methods.totalSupply().call()
        // var data =  web3.utils.fromWei('10000000', 'ether');
        const result = await(parseInt(data)/1000000000000000000)
        res.send(result.toString())
        // console.log(data);
        // res.send(parseInt(user)/1000000000000000000)

    }catch(e){
        console.log(e);
        res.send(e)
    }
}