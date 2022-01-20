import React from "react"
import PagesContext from "../../contexes/PagesContext"
import styled from "styled-components"
import { Link } from "gatsby"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import ExerciseSummary from "../ExercisesInThisSection/ExerciseSummary"
import { fetchQuizNames } from "../../services/quizzes"
import { extractPartNumberFromPath, extractSubpartNumberFromPath } from "../../util/strings"

const Title = styled.div`
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.87);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0em;
`

class ExerciseList extends React.Component {
  static contextType = PagesContext

  state = {
    render: false,
    sectionPages: null,
    quizIdToTitle: null,
  }

  async componentDidMount() {
    const value = this.context
    const sectionPages = value.all
      .filter((o) => o.exercises?.length > 0)
      .sort((a, b) => {
        let partA = extractPartNumberFromPath(a.path.toLowerCase())
        let partB = extractPartNumberFromPath(b.path.toLowerCase())

        if (partA > partB) return 1
        if (partB > partA) return -1

        let subA = extractSubpartNumberFromPath(a.path.toLowerCase())
        let subB = extractSubpartNumberFromPath(b.path.toLowerCase())

        return subA > subB ? 1 : subB > subA ? -1 : 0
      })

    const quizIdToTitle = await fetchQuizNames()
    this.setState({ sectionPages, quizIdToTitle, render: true })
  }
  render() {
    if (!this.state.render) {
      return <div>Loading...</div>
    }
    return (
      <div>
        {this.state.sectionPages &&
          this.state.sectionPages.map((page) => (
            <div key={page.title}>
              <Title>
                {page.title} (<Link to={page.path}>{page.path}</Link>)
              </Title>
              <div>
                {page.exercises.map((exercise, i2) => {
                  return (
                    <ExerciseSummary
                      index={i2}
                      exercise={exercise}
                      key={exercise.id}
                      quizIdToTitle={this.state.quizIdToTitle}
                    />
                  )
                })}
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default withSimpleErrorBoundary(ExerciseList)
