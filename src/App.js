import './App.css';
import data from "./data";
import Header from "./Components/Header";
import Entry from "./Components/Entry";

function App() {
  const entries = data.map(item => {
    return (
      <Entry
        img={item.img}
        location={item.location}
        link={item.link}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        desc={item.desc}
      />
      )
  })
  return (
    <div className="App">
      <Header/>
      {entries}
    </div>
  );
}

export default App;
