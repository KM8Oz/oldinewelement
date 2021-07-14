import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, {useState} from "react";
import {
 Icon,
 Button,
 Divider
} from "rsuite";
import Performs from "./Performs";
// test code only
// import getImg from "./utils/tools/img";
// const host = window.location.hostname;
const host = "test4.oldi.ru";
const cpu = `https://${host}/upload/icons/builder/cpu.svg`;
const gpu = `https://${host}/upload/icons/builder/gpu.svg`;
const ssd = `https://${host}/upload/icons/builder/ssd.svg`;
const hdd = `https://${host}/upload/icons/builder/hdd.svg`;
const mother = `https://${host}/upload/icons/builder/mother.svg`;
const corp = `https://${host}/upload/icons/builder/corp.svg`;
const ram = `https://${host}/upload/icons/builder/ram.svg`;
const software = `https://${host}/upload/icons/builder/software.svg`;
const fan = `https://${host}/upload/icons/builder/fan.svg`;
const power = `https://${host}/upload/icons/builder/powersupply.svg`;
export default ({
    data,
    accessories,
    id,
    code
}) => {
    const [tabIndex, setTabIndex] = useState(0);
    console.log(accessories);
    // const PROPS = `a:5:{i:105;a:1:{i:3090;a:3:{i:46440;s:5:&quot;46440&quot;;i:46441;s:5:&quot;46441&quot;;i:120323;s:6:&quot;120323&quot;;}}i:132;a:1:{i:3223;a:1:{i:33109;s:5:&quot;33109&quot;;}}i:88;a:1:{i:1441;a:3:{i:32809;s:5:&quot;32809&quot;;i:4006;s:4:&quot;4006&quot;;i:152433;s:6:&quot;152433&quot;;}}i:103;a:1:{i:3078;a:4:{i:32969;s:5:&quot;32969&quot;;i:112853;s:6:&quot;112853&quot;;i:167465;s:6:&quot;167465&quot;;i:173284;s:6:&quot;173284&quot;;}}i:110;a:1:{i:3118;a:1:{i:48840;s:5:&quot;48840&quot;;}}}`;
    const getiCON = function(NAME){
        switch (NAME) {
            case 'cpu':
                return cpu; 
                case 'ssd':
                return ssd; 
                case 'hdd':
                return hdd; 
                case 'ram':
                return ram; 
                case 'gpu':
                return gpu; 
                case 'fan':
                return fan;
                case 'power':
                return power;  
                case 'corp':
                  return corp; 
                case 'mother':
                return mother; 
                case 'software':
                return software; 
            default:
                return cpu;
        }
        }
    return(
  <Tabs className="n-tabs-banner" defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
    <TabList>
      <Tab>Комплектация компьютера</Tab>
      <Tab>Производительность</Tab>
      <Tab>Аксессуары</Tab>
    </TabList>

    <TabPanel>
      <div className="n-tabs-tab-components">
          {data.map(({
          name,
          subname,
          ico,
          list
          }, index)=>(
              <div key={index} className="n-tabs-tab-components-one">
              <i><img src={`${getiCON(ico)}`} alt={ico} style={{
                  width:"40px"
              }} /> {name} </i>
              <Divider />
              <p>{subname}</p>
              </div>
            ))
          }
      </div>
    </TabPanel>
    <TabPanel>
     <Performs />
    </TabPanel>
    <TabPanel>
    <div>
      <div id="accessories_tab"  data-id={code} data-iblockid={id} data-properties={accessories}></div>
    </div>
    </TabPanel>
  </Tabs>
)};