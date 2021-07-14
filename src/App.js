// import logo from './logo.svg';
import './App.css';
import HeadBanner from "./components/headBanner";
import TabsBonner from "./components/tabsBonner";
function App({data, accessories}) {
  
  var infos = JSON.parse(data);
  // console.log(infos);
  return (
    <div className="n-page-container">
      <HeadBanner 
      inStock={infos.element.inStock}
      img={infos.element.imgs}
      title={infos.element.title}
      code={infos.element.code}
      description={infos.element.description}
      price={infos.element.price}
      server={infos.server}
      id={infos.id}
      />
      <TabsBonner   id={infos.id}  code={infos.element.code} data={infos.element.components} accessories={accessories}/>
    </div>
  );
}

export default App;
