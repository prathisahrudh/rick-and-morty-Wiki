import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/Category/InputGroup";

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let [noOfEpisodes, setNoOfEpisodes] = useState("");
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  let length_episodes = `https://rickandmortyapi.com/api/episode`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let chars_Info = await Promise.all(
        data.characters.map((each_char) => {
          return fetch(each_char).then((res) => res.json());
        })
      );
      setResults(chars_Info);
    })();
  }, [api]);

  useEffect(() => {
    // Length of Episodes
    (async function () {
      let epi = await fetch(length_episodes).then((res) => res.json());
      let x = epi.info.count;
      setNoOfEpisodes(x);
      console.log(noOfEpisodes);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-4">
          Episode :{" "}
          <span className="text-danger">{name === "" ? "Unknown" : name}</span>
        </h1>

        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>

      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <InputGroup setID={setID} name='Episode' total={noOfEpisodes} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page='/episodes/' results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
