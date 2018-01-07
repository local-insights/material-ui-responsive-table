import React, {Component} from 'react'
import {withStyles} from 'material-ui-next/styles'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',  
  },
}

class NoContent extends Component {
  render() {
    const { classes, text } = this.props
    return (
      // TODO use grids here
      <div className={classes.root}>
        <span>{text || 'No Content'}</span>
      </div>
    )
  }
}

export default withStyles(styles)(NoContent)