import React from "react";
import Navbar from "../../Navbar";

const Overview = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [history, setHistory] = useState(null);
  // const getwalletHistory = async () => {
  //   try {
  //     const data = await fetch(WALLET_HSTORY, API_OPTIONS);
  //     const result = await data.json();
  //     setHistory(result);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // console.log(process.env.REACT_APP_MORALIS_KEY);
  // useEffect(() => {
  //   getwalletHistory();
  // }, []);
  // console.log(history);
  // if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <Navbar />
      <div>
        <h1>Welcome</h1>
        <p>
          Your dashboard for creating, tracking, and managing digital holdings
        </p>
      </div>
    </div>
  );
};

export default Overview;
