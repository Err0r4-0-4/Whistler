import web3 from "./web3";
import Random from "./build/RandomNumberConsumer.json";

console.log("Random.abi", Random.abi);
//console.log(JSON.parse(Random.abi));
const instance = new web3.eth.Contract(
  Random.abi,
  "0xF996f72599BEA4267a22FF6cEfbC202039EeFd0D"
);

export default instance;
