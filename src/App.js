import Card from "./Components/Card";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setData(data.data.memes));
  }, []);
  const dataShow = data.map((item, index) => (
    <Card key={index} url={item.url} name={item.name} />
  ));
  return (
    <>
      <div className="container">{dataShow}</div>
    </>
  );
}
