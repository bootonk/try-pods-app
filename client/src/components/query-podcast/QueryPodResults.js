import React, { useContext, useState } from "react";
import { podcastQueryContext } from "../../providers/PodcastQueryProvider";
import EpListGrid from "./EpListGrid";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PodPlayer from "./PodPlayer";

export default function QueryPodResults(props) {

  const [playerSelected, setPlayerSelected] = useState(false)

  const { queryPod } = useContext(podcastQueryContext);

  const params = useParams();

  return (
    <div className="podlist">
      <div className="page-header">
        <div className="page-image">
          <img src={queryPod.imageUrl} style={{ width: "125px" }} />
        </div>
        <div className="podlist-details">
          <div className="podlist-row">
            <div className="podlist-row-left">
              <h2>{queryPod.name}</h2>
            </div>
            <div className="podlist-row-right">
              <Link to="/addpodcast" state={{ attributes: queryPod }}>
                <p>Add to list</p>
              </Link>
            </div>
          </div>
          <div className="podlist-row-mix">
            <p>Series type: {queryPod.seriesType}</p>
            <p>Is Completed? {queryPod.isCompleted}</p>
            <p>Total episodes: {queryPod.totalEpisodesCount}</p>
            <button onClick={() => {
              if (!playerSelected) {
              setPlayerSelected(true)
              } else {
                setPlayerSelected(false)
              }
            }}>{playerSelected? "Close Player" : "Open Player"}</button>
            <p>
              <a href={`${queryPod.websiteUrl}`}>Website</a>
            </p>
          </div>
        </div>
      </div>
      <div className="podlist-description">
        <h4>Description: {queryPod.description}</h4>
      </div>
      {playerSelected && 
            <PodPlayer 
            itunesId={queryPod.itunesId}
            />
            }
      <div class="podlist-grid-container">
        <EpListGrid podImage={queryPod.imageUrl} />
      </div>
    </div>
  );
}
