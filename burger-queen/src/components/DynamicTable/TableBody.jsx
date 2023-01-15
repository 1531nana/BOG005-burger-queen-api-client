export const TableBody = (props) => {
	const { data, columns } = props;

	return (
		<tbody className="table_body">
			{data.map((element, i) => {
				return (
					<tr className="table_rowBody" key={i + 1} data-id={element.id}>
						{columns.map((objectColumn, i) => {
							if (objectColumn.hasOwnProperty("componente")) {
								return objectColumn.componente(element);
							}

							return (
								<td key={i} className="table_columnBody">
									{element[objectColumn.key]}{" "}
								</td>
							);
						})}
					</tr>
				);
			})}
		</tbody>
	);
};
