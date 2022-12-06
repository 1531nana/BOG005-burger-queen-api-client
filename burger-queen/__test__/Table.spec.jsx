import { render } from "@testing-library/react";
import { Table } from "../src/components/DynamicTable/Table"

describe('Table dinamyc component', () => {

    test('Render Table dinamyc component', () =>{
        const columnKeys = ['nombre', 'correo'];

        const data = [{}];
    
        const avaliablesKeys = [{}, {}];
        const table = document.createElement("table");
    
        const { container } = render(
            <Table columnKeys={columnKeys} data={data} columns={avaliablesKeys}/>,
          {
            container: document.body.append(table),
          }
        );
    
        expect(container).toBeInTheDocument();
    })
})