import "./styles/app.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ShowCase from "./components/ShowCase";
function App() {
  return (
    <div
      className=' bg-gray-200 font-body'
      style={{ fontFamily: "mulish", height: "200vh" }}
    >
      <Header />
      <div className='ml-0  xl:ml-36 mr-0  xl:mr-36 bg-gray-50'>
        <Banner />
        <ShowCase />
      </div>
    </div>
  );
}

export default App;
