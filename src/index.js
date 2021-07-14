import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
var element = document.getElementById('oldi_computer_container');
var data = element.getAttribute("data_set");
var accessories = element.getAttribute("accessories");
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "attributes") {
      data = element.getAttribute("data_set");
      accessories = element.getAttribute("accessories");
    }
  });
});

ReactDOM.render(
  <React.StrictMode>
    <App data={data} accessories={accessories || "Аксессуары"} />
  </React.StrictMode>,
  element
);
observer.observe(element, {
  attributes: true //configure it to listen to attribute changes
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
