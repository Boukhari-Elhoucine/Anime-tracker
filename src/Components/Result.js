import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import MyAnime from "./MyAnime";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import TabPanel from "./TabPanel";
import "./Result.css";
function Result({ uid, list }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const completedAnimes = list?.filter((anime) => anime.status === "completed");
  const watchingsoonAnimes = list?.filter((anime) => anime.status === "soon");
  const droppedAnimes = list?.filter((anime) => anime.status === "dropped");
  return (
    <div className="result">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab
            label="My List"
            id="simple-tab-0"
            aria-controls="simple-tabpanel-0"
          />
          <Tab
            label="Completed"
            id="simple-tab-1"
            aria-controls="simple-tabpanel-1"
          />
          <Tab
            label="Watching Soon"
            id="simple-tab-2"
            aria-controls="imple-tabpanel-2"
          />
          <Tab
            label="Dropped"
            id="simple-tab-3"
            aria-controls="imple-tabpanel-3"
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          {list?.map((anime) => (
            <MyAnime key={anime.anime_id} anime={anime} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {completedAnimes?.map((anime) => (
            <MyAnime key={anime.anime_id} anime={anime} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {watchingsoonAnimes?.map((anime) => (
            <MyAnime key={anime.anime_id} anime={anime} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {droppedAnimes?.map((anime) => (
            <MyAnime key={anime.anime_id} anime={anime} />
          ))}
        </TabPanel>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.firestore.ordered.mylist,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: "users",
      doc: props.uid,
      subcollections: [
        {
          collection: "list",
        },
      ],
      storeAs: "mylist",
    },
  ])
)(Result);
