import React, { PropsWithChildren } from "react";
import { IHead } from "./Head.types";
import { Helmet } from "react-helmet"

const Head = ({
    title,
    description,
    keywords,
    metaImage,
    externalScript
}: PropsWithChildren<IHead>) => {
    return <Helmet
    htmlAttributes={{
      lang: "en",
    }}
  >
    <meta charSet="utf-8" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <title>{`Oakshop - ${title}`}</title>
    <link rel="canonical" href="https://store.oakfusion.com" />
    <meta lang="en" />
    {externalScript && (
      <script src={externalScript} async defer></script>
    )}
  </Helmet>
};

export default Head;
