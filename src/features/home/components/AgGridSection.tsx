import { useEffect, useMemo, useState } from "react";
import { colDefs } from "./colDefs";
import AgGridContainer from "../../../components/layout/AgGridContainer";
import { useFetchFilteredOrderWellLazyQuery } from "../../../generated/graphql";

const AgGridSection = () => {
  const [gridApi, setGridApi] = useState<any>(null);
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

  return <AgGridContainer colDefs={columnDefs} onGridReady={onGridReady} />;
};

export default AgGridSection;

/*


  (params: any) => {
    api.showLoadingOverlay(); // Loading progress
    fetchOrderWell({
      variables: {
        skip: api.paginationGetCurrentPage() * api.paginationGetPageSize(),
        take: api.paginationGetPageSize(),
      },
    })
      .then((response) => response.data?.filteredOrderWell)
      .then(({ collection, metadata }: any) => {
        if (collection.length) {
          api.hideOverlay();
        } else {
          api.showNoRowsOverlay();
        }
        params.successCallback(collection, metadata.totalCount);
      })
      .catch((error) => {
        api.showNoRowsOverlay();
        toast.error(error.message);
        params.successCallback([], 0);
      });
  }

*/
