import React from "react"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown as icon } from "@fortawesome/free-solid-svg-icons"
import { withTranslation } from "react-i18next"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import ExerciseList from "./ExerciseList"

class ExercisesInAllSections extends React.Component {
  state = {
    render: false,
  }

  componentDidMount() {
    this.setState({ render: true })
  }

  render() {
    if (!this.state.render) {
      return <div>Loading...</div>
    }
    return (
        <ExerciseList />
    )
  }
}

export default withTranslation("common")(
  withSimpleErrorBoundary(ExercisesInAllSections),
)
