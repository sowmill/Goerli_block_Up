import { ethers } from "ethers"
import { InfuraProvider } from "@ethersproject/providers"
import networkMapping from "../chain-info/deployments/map.json"

const network = "rinkeby"
var provider = new InfuraProvider(network, "7bbca922ebeb41d8bb58f2d4b1f2820c")
const election_deployed_address = networkMapping["4"]["Election"][0]
var txx: number[] = new Array(6)

export const Update = async () => {
    const contract = new ethers.Contract(election_deployed_address, [
        "function viewvotes() public view returns (uint256[] memory)"
    ], provider);
    let tx = (await contract.viewvotes()).toString()
    txx[0] = tx[0]
    txx[1] = tx[2]
    txx[2] = tx[4]
    txx[3] = tx[6]
    txx[4] = tx[8]
    txx[5] = tx[10]
    return txx
}
