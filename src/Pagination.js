import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
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
