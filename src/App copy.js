import "./App.css";
import { useViewport } from "./utils/viewport";

function App() {
  const { width } = useViewport();

  if (width <= 768) {
    // mini 小于等于768
    console.log("mini 小于等于768");
  } else if (width > 768 && width <= 992) {
    // small 大于768，小于等于992
    console.log("small 大于768，小于等于992");
  } else if (width > 992 && width <= 1200) {
    // medium 大于992，小于等于1200
    console.log("medium 大于992，小于等于1200");
  } else {
    // large 大于1200
    console.log("large 大于1200");
  }
  console.log("width", width);

  return <div className="App"></div>;
}

export default App;
