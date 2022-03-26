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
const expansionName = "sl";
// Change Season
const season = 3;
// start Date (this only effects the tooltip dates)
const startDate = "March 1, 2022";
// Header expansion tag
const expansionTag = "Shadowlands Season 3";
// Footer news
const news = "Updated for Patch 9.2. View Github for more info.";

//  <========= Required Change Ends Here: =========>

function App() {
  const { data, error } = useWowData(expansionName, season);
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
          {!toggleChart && data && !error && (
            <Chart startDate={startDate} chartData={data} />
          )}
          {error && <Error error={error} />}
          <Footer news={news} />
        </div>
        <div>
          <Table startDate={startDate} tableData={data} />
          <TableFooter />
        </div>
      </Layout>
    </>
  );
}

export default App;
