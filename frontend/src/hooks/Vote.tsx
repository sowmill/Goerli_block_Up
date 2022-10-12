import { useContractFunction } from "@usedapp/core"
import { Contract } from "@usedapp/core/node_modules/@ethersproject/contracts"
import { utils, ethers } from "ethers"
import { InfuraProvider } from "@ethersproject/providers"
import electionabi from "../chain-info/contracts/Election.json"
import networkMapping from "../chain-info/deployments/map.json"



const network = "goerli"
var provider = new InfuraProvider(network, "cbd604457ebf4faeb5dce9beecd2958f")
//var provider= new EtherscanProvider(network, "2WY3GD6VXHKNV1IHEEV8P6IMD9AFV6KIU4");

export const SubmitVote = () => {
    const { abi } = electionabi
    const election_deployed_address = networkMapping["5"]["Election"][0]
    const electioninterface = new utils.Interface(abi)
    const electioncontract = new Contract(election_deployed_address, electioninterface, provider)

    const { send: send_vote, state: send_vote_state } =
        useContractFunction(electioncontract, "Vote",
            { transactionName: "approved_vote" })
    const Vote = (newinput: Number) => {

        send_vote(newinput, { gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', "gwei") })
    }
    return { Vote, send_vote_state }

}