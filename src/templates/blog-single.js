import React from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import BlogSingle from "../sections/Blog/Blog-single";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";
import SimpleReactLightbox from "simple-react-lightbox";

export const query = graphql`query BlogsBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      subtitle
      date(formatString: "MMMM Do, YYYY")
      author
      category
      tags
      thumbnail {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
        extension
        publicURL
      }
    }
    fields {
      slug
    }
  }
}
`;

const BlogSinglePage = ({data}) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={data.mdx.frontmatter.title} image={data.mdx.frontmatter.thumbnail.publicURL}/>
        <Navigation />
        <SimpleReactLightbox>
          <BlogSingle data={data}/>
        </SimpleReactLightbox>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default BlogSinglePage;

