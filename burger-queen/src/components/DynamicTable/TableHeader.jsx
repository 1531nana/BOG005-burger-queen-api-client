export const TableHeader = (props) => {

  const { columnKeys } = props

  return (
    <thead className="table_header">
      <tr className="table_headerRow">
        {
          columnKeys.map((column, i) => {
            return <th key={i} className="table_headerColumn">{column}</th>
          })
        }
      </tr>
    </thead>
  );
};
