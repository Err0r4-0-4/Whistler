import web3 from "./web3";
import Manager from "./build/whistler.json";

const instance = new web3.eth.Contract(
  JSON.parse(Manager.interface),
  "0xFeC18C3f52531B51975e4D4B7D1Be3D2F01299a4"
);

export default instance;
