import React from "react";
import "./components.css";
import { processBlocks } from "../utils/processBlocks";
import { processAttachments } from "../utils/processAttachments";

const Message = React.forwardRef((props, ref) => {
  const outerStyle =
    props.focused === props.ts ? { backgroundColor: "rgb(50,50,50)" } : {};
  return (
    <div className="Card mb-5" ref={ref} style={outerStyle}>
      <div>
        <img src={props.avatar} className="card-img-top" alt="..." />
      </div>
      <div className="card-body" id="cardBody">
        <div className="message">
          <h5 className="card-title">
            {props.user}
            <span className="card-text">
              <small className="text-muted">{`${new Date(props.time1)}`}</small>
            </span>
            <button
              className="message-link-button"
              onClick={() => navigator.clipboard.writeText(props.link)}
            >
              Copy Link to Clipboard
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

export default Message;
