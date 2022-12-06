import React from "react";
import Module from "../components/Module/Module";
import Layout from "../components/Layout/Layout";
import Text from "../components/Text/Text";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import iconUrl from "../assets/vector/marker.svg";
const myIcon = new L.Icon({
  iconUrl: "static/marker.svg",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
});

const iconMarker = new L.Icon({
  iconUrl: require("../assets/vector/marker.svg"),
  iconRetinaUrl: require("../assets/vector/marker.svg"),
  iconSize: new L.Point(60, 75),
});

const Event = ({ pageContext }) => {
  console.log(pageContext);
  console.log(iconUrl);
  console.log(myIcon);

  const eventDate =
    pageContext?.node?.eventDate && new Date(pageContext?.node?.eventDate);

  console.log(eventDate);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>;
      },
    },
  };

  return (
    <Layout backgroundColor={pageContext?.node?.kolorTla}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {pageContext?.node?.tloPowitalne && (
          <GatsbyImage
            style={{ width: "100%", maxHeight: "800px", position: "absolute" }}
            image={pageContext?.node?.tloPowitalne?.gatsbyImageData}
            alt="Tlo powitalne"
          />
        )}
        {pageContext?.node?.tytul && (
          <Text color="white" asTag="h1">
            {pageContext?.node?.tytul}
          </Text>
        )}
        {eventDate && (
          <>
            <Text
              asTag="h2"
              color="white"
            >{`${eventDate.getDate()}.${eventDate.getMonth()}.${eventDate.getFullYear()}`}</Text>
          </>
        )}
      </div>

      <Module>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {pageContext?.node?.informacja?.raw && (
            <div>{renderRichText(pageContext?.node?.informacja, options)}</div>
          )}
          {pageContext?.node?.certyfikaty.length > 0 && (
            <div
              style={{
                textAlign: "center",
                marginTop: "32px",
              }}
            >
              <Text asTag="h2">Certyfikaty</Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {pageContext?.node?.certyfikaty.map((cert, idx) => (
                  <a
                    href={cert?.certyfikat?.file?.url}
                    key={idx}
                    target="_blank"
                  >
                    <GatsbyImage
                      style={{ maxWidth: "300px", margin: "12px" }}
                      image={cert?.zdjecieCertyfikatu?.gatsbyImageData}
                      alt={cert?.nazwaCertyfikatu}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {pageContext?.node?.patroniHonorowi.length > 0 && (
            <div
              style={{
                textAlign: "center",
                marginTop: "32px",
              }}
            >
              <Text asTag="h2">Patroni Honorowi</Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {pageContext?.node?.patroniHonorowi.map((pat, idx) => (
                  <a href={pat?.linkDoPatrona} key={idx} target="_blank">
                    <GatsbyImage
                      style={{ maxWidth: "264px", margin: "12px" }}
                      image={pat?.zdjeciePatrona?.gatsbyImageData}
                      alt={pat?.nazwaPatrona}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
          {pageContext?.node?.patroniMedialni.length > 0 && (
            <div
              style={{
                textAlign: "center",
                marginTop: "32px",
              }}
            >
              <Text asTag="h2">Patroni Medialni</Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {pageContext?.node?.patroniMedialni.map((pat, idx) => (
                  <a href={pat?.linkDoPatrona} key={idx} target="_blank">
                    <GatsbyImage
                      style={{ maxWidth: "264px", margin: "12px" }}
                      image={pat?.zdjeciePatrona?.gatsbyImageData}
                      alt={pat?.nazwaPatrona}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
          {pageContext?.node?.placeOfEvent && (
            <div style={{ width: "640px", height: "640px" }}>
              <MapContainer
                style={{ width: "640px", height: "640px" }}
                center={[
                  pageContext?.node?.placeOfEvent?.lat,
                  pageContext?.node?.placeOfEvent?.lon,
                ]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[
                    pageContext?.node?.placeOfEvent?.lat,
                    pageContext?.node?.placeOfEvent?.lon,
                  ]}
                  icon={myIcon}
                >
                  <Popup>
                    Miejesce spotkania <br /> Spotkamy sie tutaj!
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      </Module>
    </Layout>
  );
};

export default Event;
