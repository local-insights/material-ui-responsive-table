import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
}

/**
 * Used for default text if no content found for table/list
 */
class NoContent extends Component {
  render() {
    const { classes, text } = this.props
    return (
      <div className={classes.root}>
        <span>{text || 'No Content'}</span>
      </div>
    )
  }
}

export default withStyles(styles)(NoContent)
