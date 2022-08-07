# hardhat-openzeppelin-defender

# Task

plugin created with the purpose of efficiently integrating openzeppelin defender modules with hardhat

# Installation

```bash
yarn add --dev hardhat-openzeppelin-defender
```

or

```bash
npm install --save hardhat-openzeppelin-defender
```

Import the plugin in your `hardhat.config.js`:

```js
require("hardhat-openzeppelin-defender");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "hardhat-openzeppelin-defender";
```

# Configuration

put the administration credentials of your openzeppelin defender `OpenzeppelinDefenderCredential`

```js
module.exports = {
  OpenzeppelinDefenderCredential: {
    apiKey: API_KEY,
    apiSecret: API_SECRETE,
  }
};
```

# Environment extensions

This plugin extends the Hardhat Runtime Environment by adding an `OpenzeppelinDefender` which contains all the modules of  [openzepelin defender](https://docs.openzeppelin.com/defender/)

```ts
import { OpenzeppelinDefender } from "hardhat";
```

# Usage
main samples [repository](https://github.com/asmel2020/hardhat-openzeppelin-defender-example)
## Utils
### fromChainId
check and get the name of the network by its chainId
```ts
  OpenzeppelinDefender.Utils.fromChainId(97) // bsctest
```

### AbiJsonString
extract the abi in string format from the contract interface

```ts
  OpenzeppelinDefender.Utils.AbiJsonString(abiInterface)
```

### getAbiInterfaceParams
extracts the parameters of a function or event by using its abiInterface

**abiInterface** : smart contract interface

**name** : name of the event or function to which the parameters will be extracted

**type** : specifies whether the extraction of parameters will be from a function or an event

```ts
interface AbiInterfaceParams {
  abiInterface: Interface;
  name: string;
  type: "function" | "event";
}

//response

interface AbiInterfaceParamsResponse {
  name: string;
  signature: eventSignature | functionSignature;
  inputs: any[];
  fragment: string;
}
```

example

get the AbiInterfaceParams from the Transfer event of an
ERC721 token
```ts
const params= {
  abiInterface: abiInterface,
  name: "Transfer",
  type: "event",
};
		
const result = OpenzeppelinDefender.Utils.getAbiInterfaceParams(params);

//response

/*{
  name: 'Transfer',
  signature: { eventSignature: 'Transfer(address,address,uint256)' },
  inputs: [
    { name: 'from', type: 'address' },
    { name: 'to', type: 'address' },
    { name: 'tokenId', type: 'uint256' }
  ],
  fragment: 'Transfer(address,address,uint256)'
}*/
```
## AdminClient
### Example 1
MyToken smart contract deployment and add to openzeppelin admin module
```JS
import { ethers,OpenzeppelinDefender } from "hardhat";

async function main() {
	
  const contractName='MyToken'
		
  const {chainId}=await ethers.provider.getNetwork()
		
  const Contract = await ethers.getContractFactory(contractName);
		
  const contract = await Contract.deploy();
		
  const {interface:abi,address}=await contract.deployed();
		
  //get the abi in json string using the contract interface
  const AbiJsonString= OpenzeppelinDefender.Utils.AbiJsonString(abi)
		
  //Obtaining the name of the network through the chainId of the network
  const networkName = await OpenzeppelinDefender.Utils.fromChainId(chainId);

  //add the contract to the admin
  const option={
    network:networkName ,
    address: address,
    name: contractName,
    abi:AbiJsonString
  }
		
  await OpenzeppelinDefender.AdminClient.addContract(option);
}
```
### Example 2
Add MyToken to module admin and create a proposal

```JS
import { ethers, OpenzeppelinDefender } from "hardhat";

async function main() {

  const contractName = "MyToken";
		
  const {chainId}=await ethers.provider.getNetwork()
		
  const [owner] = await ethers.getSigners();
		
  const Contract = await ethers.getContractFactory(contractName);
		
  const contract = await Contract.deploy();
		
  const { interface: abi, address} = await contract.deployed();
		
  //obtaining the parameters of an event or function through the contract interface
  const params= {
    abiInterface: abi,
    name: "Transfer",
    type: "event",
  };
		
  const {inputs,name} =OpenzeppelinDefender.Utils.getAbiInterfaceParams(params);
		
  //adding a new contract to the admin and creating a proposal
  const option= {
    contract: {
      network: await OpenzeppelinDefender.Utils.fromChainId(chainId),
      address: address,
      name:contractName,
      abi: abi.format(ethers.utils.FormatTypes.json)
    },
    title: "Mint token",
    description: "minter 10 new tokens",
    type: "custom", 
    functionInterface: {
      name: name,
      inputs: inputs,
    },
    functionInputs: [owner.address,"100000000000000000000"],
    via: owner.address,
    viaType:'EOA'
  };
		
  await OpenzeppelinDefender.AdminClient.createProposal(option);
}
```
to know more methods of the [AdminClient](https://www.npmjs.com/package/defender-admin-client)

## RelayClient
### Example 1
Creation of a relay and use of its address so that it assumes the MINTER_ROLE in the MyNft contract

```JS
import { ethers, OpenzeppelinDefender } from "hardhat";

async function main() {
 
  const contractName = "MyNFT";

  const {chainId}=await ethers.provider.getNetwork()

	//relay creation
  const RelayParams={
    name:'Relay_1',
    network: await OpenzeppelinDefender.Utils.fromChainId(chainId),
    minBalance: BigInt(1e18).toString(),
  };

  const {address:addressRelay}=await OpenzeppelinDefender.RelayClient.create(RelayParams);

  const Contract = await ethers.getContractFactory(contractName);

  //pass its address as a parameter so that it assumes MINTER_ROLE
  const contract = await Contract.deploy(addressRelay);
		
  const { interface: abi, address} =await contract.deployed();
		
  //add the contract to the admin	
  const option={
    network:await OpenzeppelinDefender.Utils.fromChainId(chainId),
    address: address,
    name: contractName,
    abi: abi.format(ethers.utils.FormatTypes.json)
  }
		
  await OpenzeppelinDefender.AdminClient.addContract(option);
}
```

to know more methods of the [RelayClient](https://www.npmjs.com/package/defender-relay-client)

## AutoTaskClint

### Example 1
creating an autoTask

```JS
import {OpenzeppelinDefender} from "hardhat";

async function main() {

  const autoTaskOptions= {
    name: "exampleAutoTask",
    encodedZippedCode: await OpenzeppelinDefender.AutoTaskClint.getEncodedZippedCodeFromFolder("./openzeppelinDefender/autoTasks/exampleAutoTask"),
    trigger: {
      type: "webhook",
    },
    paused: false,
  };
  
  await OpenzeppelinDefender.AutoTaskClint.create(autoTaskOptions);
}
```

to know more methods of the [AutoTaskClint](https://www.npmjs.com/package/defender-autotask-client)

## SentinelClient

### Example 1
Creating a sentinel, to track all Transfer events of the Mytoken smart contract and assigning an autoTaskTrigger via its autoTaskId to the sentinel

```JS
import { ethers, OpenzeppelinDefender } from "hardhat";

async function main() {

  const contractName = "MyToken";

  const { chainId } = await ethers.provider.getNetwork();

  //deployment of the smart contract MyToken
  const Contract = await ethers.getContractFactory(contractName);
		
  const contract = await Contract.deploy();
		
  const { interface: abi, address, provider } = await contract.deployed();

  //getting the eventSignature from the Transfer event		
  const params= {
    abiInterface: abi,
    name: "Transfer",
    type: "event",
  };
		
  const {signature} =OpenzeppelinDefender.Utils.getAbiInterfaceParams(params);
		
  //Obtaining the name of the network through the chainId of the network
  const networkName = await OpenzeppelinDefender.Utils.fromChainId(chainId);
		
  //get the abi in json string using the contract interface
  const abiJsonString=OpenzeppelinDefender.Utils.AbiJsonString(abi);
		
  //add the contract to the admin
  const addContractOptions= {
    network: networkName,
    address: address,
    name: contractName,
    abi: abiJsonString,
  };
		
  await OpenzeppelinDefender.AdminClient.addContract(addContractOptions);
		
  //creating an autoTask
  const autoTaskOptions= {
    name: "exampleAutoTask",
    encodedZippedCode: await OpenzeppelinDefender.AutoTaskClint.getEncodedZippedCodeFromFolder("./openzeppelinDefender/autoTasks/exampleAutoTask"),
    trigger: {
     type: "webhook",
    },
    paused: false,
  };
		
  const { autotaskId } = await OpenzeppelinDefender.AutoTaskClint.create(autoTaskOptions);
		
  //creating a sentinel and assigning an autoTaskTrigger via its autoTaskId
  const sentinelOptions= {
    type: "BLOCK",
    network: networkName,
    confirmLevel: 12,
    name: "Sentinel",
    addresses: [address],
    abi: abiJsonString,
    paused: false,
    eventConditions: [signature],
    autotaskTrigger: autotaskId,
    notificationChannels: [""],
  };

  await OpenzeppelinDefender.SentinelClient.create(sentinelOptions);	
}
```

to know more methods of the [AutoTaskClint](https://www.npmjs.com/package/defender-sentinel-client)