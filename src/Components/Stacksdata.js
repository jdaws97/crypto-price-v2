import { connectWebSocketClient } from "@stacks/blockchain-api-client";

const Stacksdata = async () => {
  const client = await connectWebSocketClient(
    "wss://stacks-node-api.testnet.stacks.co/"
  );

  const sub = await client.subscribeAddressTransactions(
    "ST26902A6NT1QSWQXXYM55EM579RY9CCPQDN02QW2",
    (event) => {
      return console.log(event);
    }
  );
  // await sub.unsubscribe();

  return console.log(sub);
};

export default Stacksdata;
