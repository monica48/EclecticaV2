


async function load(){
    let storageContract;
    let address = "0xbe319E655588Ba6853521230B9c66Cd03F60101d"
    console.log("here");
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
     
      window.web3 = await new Web3(window.ethereum);
      let contract = await new window.web3.eth.Contract(abi,address)  ;
      let a = await window.web3.eth.getAccounts()
      console.log(contract)
      const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner()
      const lazyminter = new LazyMinter({contract, signer})
      let vouch = await lazyminter.createVoucher(1,"dsflksdf")
      ab= await contract.methods.redeem(a[0],vouch).send({ from: a[0] })
      console.log("this is vouch"+ vouch.signature);
    
      return true;
    }
}


