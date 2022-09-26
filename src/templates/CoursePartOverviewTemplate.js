import React, { Fragment } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "./Layout"

import getNamedPartials from "../partials"
import { getCachedUserDetails } from "../services/moocfi"
import "./remark.css"
import PagesContext from "../contexes/PagesContext"
import LoginStateContext, {
  LoginStateContextProvider,
} from "../contexes/LoginStateContext"
import Container from "../components/Container"

import { loggedIn } from "../services/moocfi"

const ContentWrapper = styled.div`
  margin-top: 1rem;
  padding-bottom: 2rem;

  p {
    margin-bottom: 2rem;
  }
`

const Title = styled.h1``

export default class CoursePartOverviewTemplate extends React.Component {
  static contextType = LoginStateContext

  async componentDidMount() {
    if (!loggedIn()) {
      return
    }

    let userInfo = await getCachedUserDetails()
    const research = userInfo?.extra_fields?.research
    const honorCode = userInfo?.extra_fields?.honor_code
    if (research === undefined || honorCode === undefined || !honorCode) {
      navigate("/missing-info")
    }
  }

  render() {
    const { data } = this.props
    const { frontmatter, htmlAst } = data.page
    const allPages = data.allPages.edges.map((o) => {
      const res = o.node?.frontmatter
      res.exercises = o.node?.moocfiExercises
      return res
    })
    const partials = getNamedPartials()
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: partials,
    }).Compiler

    const filePath = data.page.fileAbsolutePath.substring(
      data.page.fileAbsolutePath.lastIndexOf("/data/"),
      data.page.fileAbsolutePath.length,
    )
    return (
      <PagesContext.Provider
        value={{
          all: allPages,
          current: { frontmatter: frontmatter, filePath: filePath },
        }}
      >
        <Helmet title={frontmatter.title} />
        <LoginStateContextProvider>
          <Layout>
            <Fragment>
              <Container>
                <ContentWrapper>
                  <Title>{frontmatter.title}</Title>
                  {renderAst(htmlAst)}
                </ContentWrapper>
              </Container>
            </Fragment>
          </Layout>
        </LoginStateContextProvider>
      </PagesContext.Provider>
    )
  }
}

export const pageQuery = graphql`
  query ($path: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      html
      frontmatter {
        path
        title
      }
      fileAbsolutePath
    }
    allPages: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
          moocfiExercises {
            id
            type
            parentPagePath
          }
        }
      }
    }
  }
`
