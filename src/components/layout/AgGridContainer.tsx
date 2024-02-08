import { FC } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

interface IAgGridContainer {
  rowData: Array<any>;
  colDefs: Array<any>;
}
const AgGridContainer: FC<IAgGridContainer> = ({ rowData, colDefs }) => {
  return (
    <div className="ag-theme-quartz-dark" style={{ height: "800px" }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default AgGridContainer;
