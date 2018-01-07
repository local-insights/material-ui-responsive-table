import React, {Component} from 'react'
import Grid from 'material-ui-next/Grid'

import ExpandableListItem from './ExpandableListItem'
import NoContent from './NoContent'

/**
 * List with expandable items - mobile table analogue
 */
export default class DataList extends Component {

  createListItemTitle = (columns, row) => {
    const primaryColumns = columns.filter(column => column.primary)
    return primaryColumns.length === 0
      ? row[columns[0].key]
      : primaryColumns.map(column => row[column.key]).join(' ')
  }

  createListItemDescription = (columns, row) => {
    return (
      <div>
        {
          columns.map((column, index) => (
            <Grid key={`${column.label}-${index}`} container>
              <Grid item xs>
                {column.label}
              </Grid>
              <Grid item xs>
                {column.render ? column.render(row[column.key]) : row[column.key]}
              </Grid>
            </Grid>
          ))
        }
      </div>
    )
  }

  render() {
    const {
      columns,
      data,
      noContentText,
      ExpansionPanelDetailsProps,
      ExpansionPanelDetailsTypographyProps,
      ExpansionPanelMoreIconProps,
      ExpansionPanelProps,
      ExpansionPanelSummaryProps,
      ExpansionPanelSummaryTypographyProps,
    } = this.props

    if (!Array.isArray(data) || data.length === 0 || !Array.isArray(columns) || columns.length === 0) {
      return <NoContent text={noContentText}/>
    }

    return (
      <div>
        {
          data.map((row, index) => (
            <ExpandableListItem
              key={index}
              summary={this.createListItemTitle(columns, row)}
              details={this.createListItemDescription(columns, row)}
              ExpansionPanelDetailsProps={ExpansionPanelDetailsProps}
              ExpansionPanelDetailsTypographyProps={ExpansionPanelDetailsTypographyProps}
              ExpansionPanelMoreIconProps={ExpansionPanelMoreIconProps}
              ExpansionPanelProps={ExpansionPanelProps}
              ExpansionPanelSummaryProps={ExpansionPanelSummaryProps}
              ExpansionPanelSummaryTypographyProps={ExpansionPanelSummaryTypographyProps}        
            />
          ))
        }
      </div>
    )
  }
}