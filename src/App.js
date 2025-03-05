import Header from "./components/Header"
import Entry from "./components/Entry";

function App() {
  return ( 
    <>
      <Header /> 
      <Entry 
        img = {{src: "/images/3b48931eb9566083a0c7ed9c98daa37c (1).png", alt: "CN Tower"}}
        title = "CN Tower" 
        address = "290 Bremner Blvd, Toronto" 
        googleMapsLink = "https://www.google.com/maps/place/CN+Tower/@43.6425701,-79.3896317,17z/data=!3m2!4b1!5s0x882b34d819a55ff7:0xad7cf7bcaf4e239b!4m6!3m5!1s0x882b34d68bf33a9b:0x15edd8c4de1c7581!8m2!3d43.6425662!4d-79.3870568!16zL20vMDF0d3M?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D"
        text = "The CN Tower is a 553.3 m-high communications and observation tower in Toronto, Ontario, Canada. Its name CN referred to Canadian National, the railway company that built the tower."
      />
    </>
  );
}

export default App;
