import React, {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
    Icon,
    Button,
    Divider
   } from "rsuite";
   import Slider from "./utils/slide";
   function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed();
  }
  const rNumber = () => getRandomArbitrary(25,60);
  const demodata = ()=>[rNumber(), rNumber(), rNumber(), rNumber(), rNumber()];
  const one = demodata(), two = demodata(), three = demodata();
const Performs = () => {
  
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs className="n-tabs-perfoms" defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>1080P</Tab>
          <Tab>2k</Tab>
          <Tab>4k</Tab>
        </TabList>
    
        <TabPanel>
       <div style={{
           display:"flex",
           flexDirection:"column",
           justifyContent:"flex-start",
           alignItems:"center",
           margin: "0vw 10vw"
       }}>
        <Slider  name={'CYBER PUNK'} value={one[0]} model={one[0]} unit="FPS" />
        <Slider name={'WORLD OF TANKS'} value={one[1]} model={one[1]} unit="FPS" />
        <Slider name={'PUB G'} value={one[2]} unit="FPS" model={one[2]} />
        <Slider name={'CS GO'} value={one[3]} unit="FPS" model={one[3]} />
        <Slider name={'Red Death Redemption'} value={one[4]} model={one[4]} unit="FPS" />
       </div>
        </TabPanel>
        <TabPanel>
        <div style={{
           display:"flex",
           flexDirection:"column",
           justifyContent:"flex-start",
           alignItems:"center",
           margin: "0vw 10vw"
       }}>
       <Slider  name={'CYBER PUNK'} value={two[0]} model={two[0]} unit="FPS" />
        <Slider name={'WORLD OF TANKS'} value={two[1]} model={two[1]} unit="FPS" />
        <Slider name={'PUB G'} value={two[2]} unit="FPS" model={two[2]} />
        <Slider name={'CS GO'} value={two[3]} unit="FPS" model={two[3]} />
        <Slider name={'Red Death Redemption'} value={two[4]} model={two[4]} unit="FPS" />
       </div>
        </TabPanel>
        <TabPanel>
        <div style={{
           display:"flex",
           flexDirection:"column",
           justifyContent:"flex-start",
           alignItems:"center",
           margin: "0vw 10vw"
       }}>
       <Slider  name={'CYBER PUNK'} value={three[0]} model={three[0]} unit="FPS" />
        <Slider name={'WORLD OF TANKS'} value={three[1]} model={three[1]} unit="FPS" />
        <Slider name={'PUB G'} value={three[2]} unit="FPS" model={three[2]} />
        <Slider name={'CS GO'} value={three[3]} unit="FPS" model={three[3]} />
        <Slider name={'Red Death Redemption'} value={three[4]} model={three[4]} unit="FPS" />
       </div>
        </TabPanel>
      </Tabs>
    )
}

export default Performs