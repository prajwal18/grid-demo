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

interface IAgGridContainer {
  colDefs: Array<any>;
  onGridReady: (params: any) => void;
}
const AgGridContainer: FC<IAgGridContainer> = ({ colDefs, onGridReady }) => {
  return (
    <div className="ag-theme-quartz-dark" style={{ height: "800px" }}>
      <AgGridReact
        columnDefs={colDefs}
        pagination={true}
        rowModelType={"infinite"}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 35, 50]}
        onGridReady={onGridReady}
        loadingOverlayComponent={OnLoadingComponent}
        overlayNoRowsTemplate={
          '<div class="ag-overlay-loading-center">No data available</div>'
        }
      />
    </div>
  );
};

export default AgGridContainer;
