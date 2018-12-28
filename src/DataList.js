import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import { CellRenderer, LabelRenderer } from './Renderer'
import ExpandableListItem from './ExpandableListItem'
import NoContent from './NoContent'
import Pagination from './Pagination'
import _isEqual from 'lodash.isequal';

/**
 * List with expandable items - mobile table analogue
 */
export default class DataList extends Component {
  shouldComponentUpdate(nextProps) {
    const {enableShouldComponentUpdate, data} = this.props;
    if (enableShouldComponentUpdate) {
      return (!_isEqual(nextProps.data, data));
    }
    return true;
  }

  handleChangePage = (event, page) => this.props.onChangePage(event, page)

  getRowClass = (index) => {
    const {rowsClassArray} = this.props;
    return rowsClassArray && rowsClassArray[index] ? rowsClassArray[index] : '';
  }

  createListItemTitle = (columns, row, data) => {
    const primaryColumns = columns.filter(column => column.primary)
    return primaryColumns.length === 0
      ? <CellRenderer column={columns[0]} row={row} data={data} />
      : primaryColumns
        .map(column => (
          <CellRenderer key={column.key} column={column} row={row} data={data} />
        ))
        .reduce((prev, next) => [prev, ' ', next]) // divide item headers by space
  }

  createListItemDescription = (columns, row, data, excludePrimary) => (
    <div>
      {columns
        .filter(column => !excludePrimary || !column.primary)
        .map((column, index) => (
          <Grid key={`${column.label}-${index}`} container>
            <Grid item xs>
              <LabelRenderer column={column} data={data} />
            </Grid>
            <Grid item xs>
              <CellRenderer column={column} row={row} data={data} />
            </Grid>
          </Grid>
      ))}
    </div>
  )

  render() {
    const {
      columns,
      count,
      data,
      excludePrimaryFromDetails,
      noContentText,
      page,
      rowsPerPage,
      scrollToSelected,
      scrollOptions,
      showPagination,
      ExpansionPanelDetailsProps,
      ExpansionPanelDetailsTypographyProps,
      ExpansionPanelMoreIconProps,
      ExpansionPanelProps,
      ExpansionPanelSummaryProps,
      ExpansionPanelSummaryTypographyProps,
      SelectedExpansionPanelProps,
      TablePaginationProps,
    } = this.props
    if (!Array.isArray(data)
      || data.length === 0
      || !Array.isArray(columns)
      || columns.length === 0) {
      return <NoContent text={noContentText} />
    }

    return (
      <div>
        {data.map((row, index) => (
          <ExpandableListItem
            key={index}
            panelClass={this.getRowClass(index)}
            summary={this.createListItemTitle(columns, row, data)}
            details={this.createListItemDescription(columns, row, data, excludePrimaryFromDetails)}
            selected={row.selected}
            scrollToSelected={scrollToSelected}
            scrollOptions={scrollOptions}
            ExpansionPanelDetailsProps={ExpansionPanelDetailsProps}
            ExpansionPanelDetailsTypographyProps={
              ExpansionPanelDetailsTypographyProps
            }
            ExpansionPanelMoreIconProps={ExpansionPanelMoreIconProps}
            ExpansionPanelProps={ExpansionPanelProps}
            ExpansionPanelSummaryProps={ExpansionPanelSummaryProps}
            ExpansionPanelSummaryTypographyProps={
              ExpansionPanelSummaryTypographyProps
            }
            SelectedExpansionPanelProps={SelectedExpansionPanelProps}
          />
        ))}
        {
          showPagination &&
          <Pagination
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            TablePaginationProps={TablePaginationProps}
            onChangePage={this.handleChangePage}
          />
        }
      </div>
    )
  }
}
