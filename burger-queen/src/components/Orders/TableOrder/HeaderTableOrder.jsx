
export const HeaderTableOrder = () => {
  
    const columnKeys = ['Cant.', "Producto", "Subtotal"]

    return (
      <thead className="headerTabletOrder">
        <tr className="headerTabletOrder_headerRow">
          {
            columnKeys.map(column => {
              return <th className="headerTabletOrder_headerColumn">{column}</th>
            })
          }
        </tr>
      </thead>
    );
  };
  