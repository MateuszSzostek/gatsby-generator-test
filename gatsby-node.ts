const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const eventTemplate = path.resolve("./src/templates/event.tsx");

  const events = await graphql(`
    query MyQuery {
      allContentfulEvent {
        edges {
          node {
            certyfikaty {
              nazwaCertyfikatu
              zdjecieCertyfikatu {
                gatsbyImageData
              }
              certyfikat {
                file {
                  url
                }
              }
            }
            eventDate
            patroniHonorowi {
              linkDoPatrona
              nazwaPatrona
              zdjeciePatrona {
                gatsbyImageData
              }
            }
            patroniMedialni {
              nazwaPatrona
              linkDoPatrona
              zdjeciePatrona {
                gatsbyImageData
              }
            }
            placeOfEvent {
              lat
              lon
            }
            tloPowitalne {
              gatsbyImageData
            }
            tytul
            informacja {
              raw
            }
            kolorTla
          }
        }
      }
    }
  `);

  events.data.allContentfulEvent.edges.forEach(({ node }) => {
    const slug = `/${node.tytul
      .replaceAll(" ", "-")
      .replaceAll(".", "-")
      .replaceAll(",", "-")
      .replaceAll("%", "")
      .replaceAll(":", "")
      .replaceAll(";", "")
      .replaceAll("+", "-plus-")
      .toLowerCase()}`;

    createPage({
      component: eventTemplate,
      path: slug,
      context: {
        node,
      },
    });
  });
};
