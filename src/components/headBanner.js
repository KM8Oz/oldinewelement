import React, {
    useState
} from 'react'
import {
 Icon,
 Button
} from "rsuite";
import { ZommedImg } from "./zoomedImg";
import axios from "axios";
const HeadBanner = ({inStock, img, server, title, code,price, description, id}) => {
    const host = window.location.hostname;
    console.log(img);
    const descriptioninit = description.length > 100 ? String(description).substr(0,99)+"..." : description;
    const [descriptions, setdescriptions] = useState({status:true, data:descriptioninit});
    const toggleDisc =  ()=>{
        setdescriptions({...descriptions, status:!descriptions.status});
        if(descriptions.status){
            setdescriptions({...descriptions, data:description})
        } else {
            setdescriptions({...descriptions, data:descriptioninit})
        }
    }
    const [added, setAdded] = useState(false);
    const buyById = ()=>{
        try {
            // var bodyFormData = new FormData();
            const params = new URLSearchParams()
            params.append("ID", code);
            const config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }
            axios.post(`https://${host || "test4.oldi.ru"}/catalog/get_product_ajax.php`,params, config).then((res)=>{
                // const ELEMENT_CODE = res.data?.ELEMENT_CODE;
                axios.get(`https://${host || "test4.oldi.ru"}/catalog/ajax_cart.php?ID_PRODUCT=${code}&WHEREFROM=Главная - Новинки&is_ajax_request=true`).then((res)=>{
               console.log("added:", res.data);
               if(res.data?.order){
                setAdded(true)
               }
                }).catch((err)=>{
                    console.log("error adding product to basket:", err);
                })
            }).catch((err)=>{
                console.log("error adding product to basket:", err);
            })
        } catch (error) {
            console.log("error adding product to basket:", error);
        }
    
    }
    return (
        <div className="n-head-banner-container">
         <div className="n-head-banner-left">
         <ZommedImg images={img} alt={title} />
        </div>
         <div className="n-head-banner-right">
         <div className="n-head-banner-right-0">
             {title}
          </div>
          <div className="n-head-banner-right-1">
           { inStock ? <p style={{color:"green"}}>
             <Icon icon="check" />
             В наличии
            </p> :
            <p style={{color:"green"}}>
             <Icon icon="uncheck" />
             Нет в наличии
            </p>}
            <p>код:{code}</p>
          </div>
          <div className="n-head-banner-right-2" style={{cursor:"grab", userSelect:"none"}} onClick={toggleDisc}>
              {descriptions.data}
          </div>
          <div className="n-head-banner-right-3">
              {price.toLocaleString()}
              <Icon icon="rub" style={{fontSize:"25px", marginLeft:"10px"}} />
          </div>
          <div className="n-head-banner-right-4">
          <Button appearance="primary" style={{
     backgroundColor: added ?  "#7dbc37" : "#0060af",
        flexGrow:1
          }} onClick={()=>buyById()}>
          <Icon icon="shopping-cart"  style={{
                  marginRight:"7px",
                  fontSize:"1.3em",
                
              }}/>
              Купитъ</Button>
          <Button appearance="primary" style={{
             backgroundColor: "rgb(255, 255, 255)",
             color: "rgb(0, 96, 175)",
             textAlign: "center",
             display: "contents",
          }}  disabled={true} href={`https://${host}/gaming-pcs?code=${code}&uuid=${id}`}>
             
              Изменить конфигурацию</Button>
          </div>
         </div>
        </div>
    )
}

export default HeadBanner;