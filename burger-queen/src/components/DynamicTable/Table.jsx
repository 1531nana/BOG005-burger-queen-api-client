import "./style.scss";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const Table = (props) => {
	const { data, columns, columnKeys } = props;

	return (
		<table className="table">
			<TableHeader columnKeys={columnKeys} />
			<TableBody data={data} columns={columns} />
		</table>
	);
};
