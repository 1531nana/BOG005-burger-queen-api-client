// import { useContext } from "react";
// import TableContext from "../../context/TableContext";

export const TableHeader = (props) => {

  // const { avaliablesKeys} = useContext(TableContext)

    const {headerColumns} = props;
    const listTh = headerColumns.filter(element => element != 'id' && element != 'type')


return(
    <thead className="table_header">
        <tr className="table_headerRow">
            {
              listTh.map(column =>{
                return <th className="table_headerColumn">{column}</th>
              })
            }
            <th className="table_headerColumn">options</th>
        </tr>
    </thead>
  );
};
