import Chart from "./components/Chart/Chart";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import useWowData from "./hooks/useWowData";

//  <========= Required Change Starts Here: =========>
// Must be initials lowercase
const expansionName = "sl";
// Change Season
const season = 2;
//  <========= Required Change Ends Here: =========>

function App() {
  const { data, loading, error } = useWowData(expansionName, season);

  console.log(data);

  return (
    <>
      <Header expansionName={expansionName} season={season} />
      {data && !error && <Chart chartData={data} />}
      {loading && <Loading />}
      {error && <Error error={error} />}
      <Footer />
    </>
  );
}

export default App;
