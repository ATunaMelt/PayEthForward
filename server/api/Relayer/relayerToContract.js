const abiNominate = require('./abi')
const relayerAddress = '0x7714e9182799ce2f92b26e70c9cd55cd1b3c1d38'
const nominateContractAddress = '0x3AFAe04805bB556Ff14A4af4aa7875053D6C3948'
const Web3 = require('web3')
const {DefenderRelayProvider} = require('defender-relay-client/lib/web3')
// PUT SECRET IS SECRETS.JS FILE (PROCESS_ENV)
// relayer address: 0x7714e9182799ce2f92b26e70c9cd55cd1b3c1d38
const credentials = {
  apiKey: 'GD43DTA3A7xqWowrRENrsYRnicGToHni',
  apiSecret: 'yUL1zuDV9zYrdX5ka51XiqqwCb4CgVZTM8BaDsRKM1TUiPFrjkhYP1ev239UNdKi'
}

const provider = new DefenderRelayProvider(credentials, {speed: 'fast'})
const web3 = new Web3(provider)
const from = relayerAddress

const buildContract = () => {
  const contract = new web3.eth.Contract(abiNominate, nominateContractAddress, {
    from
  })
  return contract
}

module.exports = buildContract