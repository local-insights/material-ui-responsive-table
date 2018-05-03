import React, { Component } from 'react'
import { TableCell, TablePagination } from 'material-ui/Table'

export default class Pagination extends Component {
  handleChangePage = (event, page) => this.props.onChangePage(event, page)

  render() {
    const {
      component,
      count,
      rowsPerPage,
      page,
      TablePaginationProps,
    } = this.props

    return (
      <TablePagination
        {...TablePaginationProps}
        component={component || TableCell}
        count={count}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        page={page}
        onChangePage={this.handleChangePage}
      />
    )
  }
}
