//  Q3: Displaying Data Coming From an API.
//  Use this endpoint for fetching the data "https://jsonplaceholder.typicode.com/posts/1/comments",
//  you can use axios to fetch the data as well and display it on the dom.

import React, { useEffect, useState } from "react";
function Fetch() {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setGetData(data));
  }, []);
  console.log("GET DATA :", getData);

  return (
    <>
      <h1 className="hooks">Q#3 Data Fetch</h1>
      {getData.map((val, ind) => {
        return (
          <div className="row">
            <div className="card-body">
              <p className="card-text">
                <p>
                  {val.postId + " "}
                  {val.id + " "}
                  {val.name + " "}
                  {val.email + " "}
                  {val.body + " "}
                </p>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Fetch;
