/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      name="google-site-verification"
      content="ctWyjj1s4TE9DlM_nYVJt8rHtuGnStjH4fk0jchWDrA"
      key="google-site-verification"
    />,
  ]);
};

