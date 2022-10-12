import { ethers } from "ethers"
import networkMapping from "../chain-info/deployments/map.json"

const provider = new ethers.providers.Web3Provider(window.ethereum);
const election_deployed_address = networkMapping["5"]["Election"][0]

export const Update = async () => {
    const signer = provider.getSigner();
    await provider.send('eth_requestAccounts', []);
    const myAddress = await signer.getAddress();
    const contract = new ethers.Contract(election_deployed_address, [
        "function viewvotes() public view returns (uint256[] memory)"
    ], signer)
    console.log(myAddress)
    let tx = (await contract.viewvotes()).toString()
    return tx.replaceAll(',', '')
}