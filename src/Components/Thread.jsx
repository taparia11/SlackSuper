import React from "react";
import { processBlocks } from "../utils/processBlocks";
import { processAttachments } from "../utils/processAttachments";

const Thread = React.forwardRef((props, ref) => {
  const outerStyle =
    props.focused === props.ts ? { backgroundColor: "rgb(50,50,50)" } : {};
  return (
    <div className="thread" ref={ref} style={outerStyle}>
      <div className="threadmess">
        <img src={props.avatar} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">
            {props.user}{" "}
            <span className="card-text">
              <small className="text-muted">{`${new Date(props.time)}`}</small>
            </span>
            <button
              className="message-link-button"
              onClick={() => navigator.clipboard.writeText(props.link)}
            >
              Link
            </button>
          </h5>

          <p className="card-text">
            {processBlocks(props.blocks, props.getUserProfile, props.getEmoji)}
          </p>

          {processAttachments(props.attachments)}
        </div>
      </div>
    </div>
  );
});

export default Thread;
