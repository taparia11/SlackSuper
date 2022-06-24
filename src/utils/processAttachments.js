export const processAttachments = (attachments) => {
  if (!attachments) return;

  const result = [];
  for (const attachment of attachments) {
    result.push(
      <div className="embed" key={Math.random()}>
        <div>
          <img src={attachment.service_icon} className="embed-service-icon" />
          <text className="embed-service">{attachment.service_name}</text>
        </div>
        <a href={attachment.title_link} className="embed-link link">
          {attachment.title}
        </a>
        <p>{attachment.text}</p>
        {attachment.image_url ? (
          <img
            style={{
              height: "auto",
              width: "auto",
              maxHeight:
                (360 * attachment.image_height) / attachment.image_width,
              maxWidth: 360,
            }}
            src={attachment.image_url}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
  return result;
};
