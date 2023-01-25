export const HeaderTableOrder = () => {
	const columnKeys = ["Cant.", "Producto", "Subtotal"];

	return (
		<thead className="headerTabletOrder">
			<tr className="headerTabletOrder_headerRow">
				{columnKeys.map((column, i) => {
					return (
						<th className="headerTabletOrder_headerColumn" key={i}>
							{column}
						</th>
					);
				})}
			</tr>
		</thead>
	);
};
