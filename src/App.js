import Header from "./components/Header"
import Entry from "./components/Entry"; 
import data from "./data";


function App() { 

  const entryItems = data.map( (entry) => {
    return(
      <Entry 
        key = {entry.id}
        {...entry}
      
      />
    )
  })
  return ( 
    <>
      <Header /> 
      {entryItems}
    </>
  );
}

export default App;
