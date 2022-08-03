// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";
import { useEnvironment } from "./helpers";

describe("Integration tests examples", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment("hardhat-project");

    /*it("The example filed should say hello",async function () {
     await this.hre.OpenzeppelinDefender.AdminClient.addContract({
        network: 'bsctest',
        address: '0x9F453125825b4C8277A6979Ed829E6FF27fbe62a',
        name: 'lalala',
        abi: JSON.stringify([
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "tokenAddres",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "bool",
                  "name": "typeBrige",
                  "type": "bool"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "chainID",
                  "type": "uint256"
                }
              ],
              "name": "Brige",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "Paused",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
                }
              ],
              "name": "RoleAdminChanged",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "RoleGranted",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "RoleRevoked",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "Unpaused",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DEFAULT_ADMIN_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "PAUSER_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "REGISTRE_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "TRANSFER_ROLE",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_idToken",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "brige",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_idToken",
                  "type": "uint256"
                }
              ],
              "name": "getRegisterToken",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "Originaltoken",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "Wrappertoken",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "isOriginalTokenAddress",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct BrigeToken.TokensInfo",
                  "name": "",
                  "type": "tuple"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                }
              ],
              "name": "getRoleAdmin",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "grantRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "hasRole",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pause",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "paused",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_idToken",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "_Otoken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_Wtoken",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "_access",
                  "type": "bool"
                }
              ],
              "name": "registerToken",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "renounceRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "revokeRole",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_idToken",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "_Otoken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_Wtoken",
                  "type": "address"
                }
              ],
              "name": "setRegisterTokenWrape",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
                }
              ],
              "name": "supportsInterface",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "tokensInfo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "Originaltoken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "Wrappertoken",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "isOriginalTokenAddress",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_token",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "transferToken",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "unpause",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]),
      })
    });*/

    /*it("The example filed should say hello",async function () {
     console.log(await this.hre.OpenzeppelinDefender.AutoTaskClint.list());
     });*/

    /*it("The example filed should say hello", async function () {
      const Autotask: any = {
        name: "primera subida",
        encodedZippedCode: await this.hre.OpenzeppelinDefender.AutoTaskClint.getEncodedZippedCodeFromFolder(
          "./code"
        ),
        trigger: {
          type: "webhook",
        },
        paused: false,
      };
      console.log(
        await this.hre.OpenzeppelinDefender.AutoTaskClint.create(Autotask)
      );
    }).timeout(60000);*/

    
    /*it("The example filed should say hello",async function () {
     console.log(await this.hre.OpenzeppelinDefender.AutoTaskClint.get('268b88bc-8003-45fd-8881-50e521aba9db'));
     }).timeout(60000);*/

     /*it("The example filed should say hello", async function () {
      const Autotask: any = {
        autotaskId:'268b88bc-8003-45fd-8881-50e521aba9db',
        name: "loca loca loca",
        trigger: {
          type: "webhook",
        },
        paused: false,
      };
      console.log(
        await this.hre.OpenzeppelinDefender.AutoTaskClint.update(Autotask)
      );
    }).timeout(60000);*/

    /*it("The example filed should say hello",async function () {
     console.log(await this.hre.OpenzeppelinDefender.AutoTaskClint.delete('268b88bc-8003-45fd-8881-50e521aba9db'));
     }).timeout(60000);*/

    /*it("The example filed should say hello",async function () {
     console.log(await this.hre.OpenzeppelinDefender.SentinelClient.list())
     }).timeout(60000);*/

  });
});
