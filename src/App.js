import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Render from "./Components/Render";
import Home from "./Components/Home";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [masterData, setMasterData] = useState({});
  const [jointData, setJointData] = useState([]);
  const [channels, setChannels] = useState([]);
  const [users, setUsers] = useState({});
  const [emojis, setEmojis] = useState({});

  const masterDataFetch = async () => {
    const result = await axios.get(
      "https://superpathslackbackend.taparia11.repl.co/api/data/dynamic/collections/allData"
    );

    const master = {};
    for (const d of result.data.messages)
      master[d.name] = d.messages.filter((a) => {
        if (a.blocks) return a;
      });
    setMasterData(master);

    const collective = [];
    Object.entries(master).map(([key, value]) =>
      value.map((message) => {
        message.channel = key;
        collective.push(message);
      })
    );
    setJointData(collective);
  };

  const channelsFetch = async () => {
    let response = await axios.get(
      "https://superpathslackbackend.taparia11.repl.co/api/data/fetchallchannel"
    );
    let data = await response.data;
    setChannels(data);
  };

  const userFetch = async () => {
    const result = await axios.get(
      "https://superpathslackbackend.taparia11.repl.co/api/data/fetchallusers"
    );

    let map = {};
    for (const user of await result.data) {
      map[user.id] = user;
    }
    setUsers(map);
  };

  const emojiFetch = async () => {
    const result = await axios.get(
      "https://superpathslackbackend.taparia11.repl.co/api/data/fetchallemoji"
    );
    setEmojis(result.data[0]);
  };

  useEffect(() => {
    masterDataFetch();
    channelsFetch();
    userFetch();
    emojiFetch();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home channels={channels} />} />
          <Route
            path="*"
            element={
              <Render
                masterData={masterData}
                jointData={jointData}
                channels={channels}
                users={users}
                emojis={emojis}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
