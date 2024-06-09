import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../components/CreateNFT/form.slice";
import userReducer from "../components/Login/user.slice";
import walletReducer from "../components/MyNFT/wallet.nft.slice";
import nftReducer from "../components/Overview/NFTData/nft.slice";

const appstore = configureStore({
  reducer: {
    nftSlice: nftReducer,
    userSlice: userReducer,
    formSlice: formReducer,
    walletslice: walletReducer,
  },
});

export default appstore;
