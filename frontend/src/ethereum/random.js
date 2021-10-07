import web3 from "./web3";
import Random from "./build/RandomNumberConsumer.json";

console.log("Random.abi", Random.abi);
//console.log(JSON.parse(Random.abi));
const instance = new web3.eth.Contract(
  Random.abi,
  "0xD5933D759B4e703A99C0Aef8486E7D134DAdBA7d"
);

export default instance;
