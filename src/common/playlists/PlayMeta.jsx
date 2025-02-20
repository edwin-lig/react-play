import { cloneElement } from "react";
import { Helmet } from "react-helmet";

function PlayMeta({ id, name, description, path, cover, component }) {
  const playFolder = path.split("/")[2];

  let metaImage; // Initialize metaImage variable
  if (cover) {
    metaImage = cover; // If cover path is given, use that
  } else {
    try {
      // If not, try finding the cover.png in the play's folder
      metaImage = `https://reactplay.io${require(`../../plays/${playFolder}/cover.png`)}`; // It seems that
      // some platforms such as Twitter need full, explicit URL's to display images correctly
    } catch {
      // If no image is available, cover stays as undefined
      console.log("No cover available.");
    }
  }

  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        {metaImage && (
          <meta
            property="og:image"
            content={metaImage}
            data-react-helmet="true"
          />
        )}
        <meta
          property="og:image:alt"
          content={description}
          data-react-helmet="true"
        />
        <meta name="twitter:title" content={name} data-react-helmet="true" />
        <meta
          name="twitter:description"
          content={description}
          data-react-helmet="true"
        />
        {metaImage && (
          <meta
            name="twitter:image"
            content={metaImage}
            data-react-helmet="true"
          />
        )}
      </Helmet>
      {cloneElement(component(), { id })}
    </>
  );
}

export default PlayMeta;
