import { FC } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { CircularProgress, Flex, Text } from "@chakra-ui/react";

const OnLoadingComponent = () => {
  return (
    <Flex gap={5}>
      <CircularProgress isIndeterminate color="green.300" size="24px" />
      <Text>Loading...</Text>
    </Flex>
  );
};
const gridOptions = {
  pagination: true,
  paginationPageSize: 10,
  paginationPageSizeSelector: [10, 20, 30, 40, 50],
  loadingOverlayComponent: OnLoadingComponent,
  overlayNoRowsTemplate:
    '<span class="ag-overlay-no-rows-center">No data available</span>',
};

interface IAgGridContainer {
  colDefs: Array<any>;
  onGridReady: (params: any) => void;
}
const AgGridContainer: FC<IAgGridContainer> = ({
  colDefs,
  onGridReady,
}) => {
  return (
    <div className="ag-theme-quartz-dark" style={{ height: "800px" }}>
      <AgGridReact
        columnDefs={colDefs}
        defaultColDef={{ filter: true }}
        pagination={true}
        onGridReady={onGridReady}
        gridOptions={gridOptions}
      />
    </div>
  );
};

export default AgGridContainer;
