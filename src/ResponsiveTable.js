import React, {Component} from 'react'
import Hidden from 'material-ui-next/Hidden'

import DataList from './DataList'
import DataTable from './DataTable'

export default class ResponsiveTable extends Component {
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
      TableBodyCellProps,
      TableBodyProps,
      TableBodyRowProps,
      TableHeadCellProps,
      TableHeadProps,
      TableHeadRowProps,
      TableProps,
    } = this.props

    return (
      <div>

        {/* DESKTOP BIG TABLE */}

        <Hidden mdDown>
          <DataTable
            columns={columns}
            data={data}
            noContentText={noContentText}
            TableBodyCellProps={TableBodyCellProps}
            TableBodyProps={TableBodyProps}
            TableBodyRowProps={TableBodyRowProps}
            TableHeadCellProps={TableHeadCellProps}
            TableHeadProps={TableHeadProps}
            TableHeadRowProps={TableHeadRowProps}
            TableProps={TableProps}
          />
        </Hidden>

        {/* MOBILE EXPANDABLE LIST OF CARDS */}
  
        <Hidden lgUp>
          <DataList
            columns={columns}
            data={data}
            noContentText={noContentText}
            ExpansionPanelDetailsProps={ExpansionPanelDetailsProps}
            ExpansionPanelDetailsTypographyProps={ExpansionPanelDetailsTypographyProps}
            ExpansionPanelMoreIconProps={ExpansionPanelMoreIconProps}
            ExpansionPanelProps={ExpansionPanelProps}
            ExpansionPanelSummaryProps={ExpansionPanelSummaryProps}
            ExpansionPanelSummaryTypographyProps={ExpansionPanelSummaryTypographyProps}
          />
        </Hidden>
      </div>
    )
  }
}