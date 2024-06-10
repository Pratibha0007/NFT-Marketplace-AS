import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "../components/Overview/NFTData/nft.slice";
import { API_OPTIONS, WALLET_NFT } from "../utils/srcLinks";

const useNFT = () => {
  const dispatch = useDispatch();
  const getNFTData = async () => {
    const data = await fetch(WALLET_NFT, API_OPTIONS);
    const result = await data.json();
    dispatch(setItems(result.result));
  };

  useEffect(() => {
    getNFTData();
  }, []);
};

export default useNFT;
