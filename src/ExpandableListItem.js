import React, { Component } from 'react'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui-next/ExpansionPanel'
import Typography from 'material-ui-next/Typography'
import { withStyles } from 'material-ui-next/styles'

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
  render() {
    const {
      classes,
      ExpansionPanelDetailsProps,
      ExpansionPanelDetailsTypographyProps,
      ExpansionPanelMoreIconProps,
      ExpansionPanelProps,
      ExpansionPanelSummaryProps,
      ExpansionPanelSummaryTypographyProps,
    } = this.props

    return (
      <ExpansionPanel {...ExpansionPanelProps}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon {...ExpansionPanelMoreIconProps} />}
          {...ExpansionPanelSummaryProps}
        >
          <Typography
            classes={{
              root: classes.summaryText,
            }}
            gutterBottom
            type="headline"
            {...ExpansionPanelSummaryTypographyProps}
          >
            {this.props.summary}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails {...ExpansionPanelDetailsProps}>
          <Typography
            classes={{
              root: classes.detailsText,
            }}
            gutterBottom
            type="headline"
            {...ExpansionPanelDetailsTypographyProps}
          >
            {this.props.details}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(ExpandableListItem)
