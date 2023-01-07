import { useState } from "react";
import Chart from "./components/Chart/Chart";
import Layout from "./components/Layout/Layout";
import Table from "./components/Table/Table";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import useWowData from "./hooks/useWowData";
import ChartTable from "./components/Chart/ChartTable";
import TableFooter from "./components/Footer/TableFooter";
//  <========= Required Change Starts Here: =========>
// Must be initials lowercase
const expansionName = "df";
// Change Season
const season = 1;
// start Date (this only effects the tooltip dates)
export const startDate = "December 12, 2022";
// Header expansion tag
const expansionTag = "Dragonflight Season 1";
// Footer news
const news = "Data taken from Raider.io Leaderboards";

//  <========= Required Change Ends Here: =========>

function App() {
  const { data, error } = useWowData(expansionName, season);
  const [toggleChart, setToggleChart] = useState<boolean>(false);

  const handleChange = () => {
    setToggleChart(!toggleChart);
  };
  return (
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
        {error && <Error error={error} />}
        <Footer news={news} />
      </div>
      <div>
        <Table tableData={data} />
        <TableFooter />
      </div>
    </Layout>
  );
}

export default App;
