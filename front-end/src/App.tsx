import { useState } from "react";
import Chart from "./components/Chart/Chart";
import Loading from "./components/Loading/Loading";
import Layout from "./components/Layout/Layout";
import Table from "./components/Table/Table";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import useWowData from "./hooks/useWowData";
import ChartTable from "./components/Chart/ChartTable";
//  <========= Required Change Starts Here: =========>
// Must be initials lowercase
const expansionName = "sl";
// Change Season
const season = 3;
// Header expansion tag
const expansionTag = "Shadowlands Season 3 World Count";
// Footer news
const news = "Updated for Patch 9.2. View Github for more info.";
//  <========= Required Change Ends Here: =========>

function App() {
  const { data, loading, error } = useWowData(expansionName, season);
  const [toggleChart, setToggleChart] = useState<boolean>(false);

  const handleChange = () => {
    setToggleChart(!toggleChart);
  };
  return (
    <>
      <Layout>
        <div>
          <Header
            expansionTag={expansionTag}
            counterData={data}
            handleChange={handleChange}
            view={toggleChart}
          />
          {toggleChart && data && !error && <ChartTable chartData={data} />}
          {!toggleChart && data && !error && <Chart chartData={data} />}
          {loading && <Loading />}
          {error && <Error error={error} />}
          <Footer news={news} />
        </div>

        <Table tableData={data} />
      </Layout>
    </>
  );
}

export default App;
