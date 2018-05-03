import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = {
  summaryText: {
    width: '100%',
  },
  detailsText: {
    opacity: 0.5,
    width: '100%',
  },
}

/**
 * Expandable component with header text (summary) and expandable description text (details)
 */
class ExpandableListItem extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && nextProps.scrollToSelected) {
      // material-ui-next encourages ReactDOM until React find better way
      // https://material-ui-next.com/getting-started/frequently-asked-questions/#how-can-i-access-the-dom-element-
      ReactDOM.findDOMNode(this).scrollIntoView(nextProps.scrollOptions || { behavior: 'smooth', block: 'center' })
    }
  }

  render() {
    const {
      classes,
      details,
      selected,
      summary,
      ExpansionPanelDetailsProps,
      ExpansionPanelDetailsTypographyProps,
      ExpansionPanelMoreIconProps,
      ExpansionPanelProps,
      ExpansionPanelSummaryProps,
      ExpansionPanelSummaryTypographyProps,
      SelectedExpansionPanelProps,
    } = this.props

    const rootProps = selected
      ? { ...ExpansionPanelProps, ...SelectedExpansionPanelProps }
      : ExpansionPanelProps

    return (
      <ExpansionPanel {...rootProps} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon {...ExpansionPanelMoreIconProps} />}
          {...ExpansionPanelSummaryProps}
        >
          <Typography
            classes={{
              root: classes.summaryText,
            }}
            gutterBottom
            variant="headline"
            {...ExpansionPanelSummaryTypographyProps}
          >
            {summary}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails {...ExpansionPanelDetailsProps}>
          <Typography
            classes={{
              root: classes.detailsText,
            }}
            gutterBottom
            variant="headline"
            {...ExpansionPanelDetailsTypographyProps}
          >
            {details}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(ExpandableListItem)
