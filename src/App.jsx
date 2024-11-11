import Header from "./containers/Header";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Section from "./containers/Section";
import BackToTop from "./components/BackTop";

function App() {
  return (
    <>
      <div className="px-60 py-1">
        <Header />
        <Section />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
