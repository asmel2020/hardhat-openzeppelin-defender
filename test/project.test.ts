import { useEnvironment } from "./helpers";

describe("Integration tests examples", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment("hardhat-project");

    it("Should add the example field",async function () {
      console.log(this.hre.OpenzeppelinDefender.Utils.fromChainId(97))
    });

  
  });

 
});


