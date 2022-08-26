import React from "react";
import { App } from "../src/index.js";

const HomePage = ( {data} ) => {
    console.log({data})
  return <App data={data}/>;
};

export async function getServerSideProps() {
  // Fetch data from external API
  let data1 =[{displayText:'Something',value:'something'}]
  let data2 =[{displayText:'Something',value:'something'}]
  let data3 =[{displayText:'Something',value:'something'}]
  let data=[data1,data2,data3]
  try{
    const res1= await fetch(`https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/education?role=softwaredeveloper`);
    data1= await res1.jason();
    const res2= await fetch(`https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/education?role=softwaredeveloper`);
    data2= await res2.jason();
    const res3= await fetch(`https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/education?role=softwaredeveloper`);
    data3= await res3.jason();
    data=[data1,data2,data3]
  } catch(error){
  }
  console.log({data})
  return {props:{data}};
}
export async function postReq() {
  let resp = await fetch("https://0uvw9gcxq2.execute-api.ap-south-1.amazonaws.com/qa/v1/register", {
	

	method: "POST",
})
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

// .then(resp.json())
//   .then(resp => {
//     // Handle response 
//     console.log('Response: ', resp);
//   })
//   .catch(err => {
//     // Handle error 
//     console.log('Error message: ', error);
//   });
// }
}
export default HomePage;