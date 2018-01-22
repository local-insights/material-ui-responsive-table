export const CellRenderer = ({ column, row, data }) =>
  (
    column.render
      ? column.render(row[column.key], row, data)
      : row[column.key]
  )

export const LabelRenderer = ({ column, data }) =>
  (
    column.renderLabel
      ? column.renderLabel(column, data)
      : column.label.toUpperCase()
  )
