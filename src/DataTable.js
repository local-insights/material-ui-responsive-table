import React, {Component} from 'react'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui-next/Table'
import {withStyles} from 'material-ui-next/styles'

import NoContent from './NoContent'

/**
 * Simple read only table with header and body
 */
export default class DataTable extends Component {
  render() {
    const {
      columns,
      data,
      noContentText,
      TableBodyCellProps,
      TableBodyProps,
      TableBodyRowProps,
      TableHeadCellProps,
      TableHeadProps,
      TableHeadRowProps,
      TableProps,
    } = this.props

    if (!Array.isArray(data) || data.length === 0 || !Array.isArray(columns) || columns.length === 0) {
      return <NoContent text={noContentText}/>
    }

    return (
      <Table {...TableProps}>
        <TableHead {...TableHeadProps}>
          <TableRow {...TableHeadRowProps}>
            { columns.map((column, index) => (
              <TableCell
                key={`${column.label}-${index}`}
                {...TableHeadCellProps}
              >
                {column.label.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody {...TableBodyProps}>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} {...TableBodyRowProps}>
              { columns.map((column, columnIndex) => (
                <TableCell
                  key={`${rowIndex}-${columnIndex}`}
                  {...TableBodyCellProps}
                >
                  {column.render ? column.render(row[column.key], column, row, data) : row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}