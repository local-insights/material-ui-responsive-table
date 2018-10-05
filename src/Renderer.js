export const CellRenderer = ({ column, row, data, isTable }) =>
  (
    column.render
      ? column.render(row[column.key], row, data, isTable)
      : row[column.key]
  )

export const LabelRenderer = ({ column, data, isTable }) =>
  (
    column.renderLabel
      ? column.renderLabel(column, data, isTable)
      : column.label.toUpperCase()
  )
