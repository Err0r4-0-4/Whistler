import web3 from "./web3";
import Manager from "./build/whistler.json";

const instance = new web3.eth.Contract(
  JSON.parse(Manager.interface),
  "0xd2D51085b4095Da89027280a90537f17AbDd1400"
);

export default instance;
