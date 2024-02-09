import { useEffect, useMemo, useState } from "react";
import { colDefs } from "./colDefs";
import AgGridContainer from "../../../components/layout/AgGridContainer";
import { useFetchFilteredOrderWellLazyQuery } from "../../../generated/graphql";
import { Input } from "@chakra-ui/react";

const AgGridSection = () => {
  const [gridApi, setGridApi] = useState<any>(null);
  const [quickFilterText, setQuickFilterText] = useState("");

  const [fetchOrderWell, { loading, data, error }] =
    useFetchFilteredOrderWellLazyQuery();
  const columnDefs = useMemo(() => colDefs, []);

  const onGridReady = (params: any) => {
    const { api } = params;
    fetchOrderWell();
    setGridApi(api);
  };

  useEffect(() => {
    if (gridApi) {
      if (loading) {
        gridApi.showLoadingOverlay();
      } else {
        gridApi.hideOverlay();
        if (error) {
          gridApi.showNoRowsOverlay();
        }

        const collection = data?.filteredOrderWell.collection || [];
        console.log("Hello", loading, error, data);

        gridApi.setRowData(collection);
      }
    }
  }, [loading, error, data]); // eslint-disable-line react-hooks/exhaustive-deps

  // Filtering the Whole Grid
  const handleFilterChange = (event: any) => {
    const filterText = event.target.value;
    setQuickFilterText(filterText);
    if (gridApi) {
      gridApi.setQuickFilter(filterText);
    }
  };
  // Filtering the whole grid

  return (
    <>
      <Input
        type="text"
        placeholder="Quickly Filter the grid"
        value={quickFilterText}
        onChange={handleFilterChange}
      />
      <AgGridContainer colDefs={columnDefs} onGridReady={onGridReady} />
    </>
  )
};

export default AgGridSection;
