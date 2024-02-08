import { toast } from "react-toastify";
import { useEffect, useMemo, useState } from "react";
import { colDefs } from "./colDefs";
import AgGridContainer from "../../../components/layout/AgGridContainer";
import { useFetchFilteredOrderWellLazyQuery } from "../../../generated/graphql";

const AgGridSection = () => {
  const [gridApi, setGridApi] = useState<any>(null);
  const [fetchOrderWell, { data }] = useFetchFilteredOrderWellLazyQuery();
  const columnDefs = useMemo(() => colDefs, []);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };

  useEffect(() => {
    fetchOrderWell({ variables: { skip: 0, take: 10 } });
  }, [fetchOrderWell]);

  useEffect(() => {
    if (gridApi) {
      const dataSource = {
        getRows: (params: any) => {
          gridApi.showLoadingOverlay(); // Loading progress
          fetchOrderWell({ variables: { skip: 0, take: 10 } })
            .then((response) => response.data?.filteredOrderWell)
            .then(({ collection, metadata }: any) => {
              if (collection.length) {
                gridApi.hideOverlay();
              } else {
                gridApi.showNoRowsOverlay();
              }
              params.successCallback(collection, metadata.totalCount);
            })
            .catch((error) => {
              gridApi.showNoRowsOverlay();
              toast.error(error.message);
              params.successCallback([], 0);
            });
        },
      };

      gridApi.setDatasource(dataSource);
    }
  }, [gridApi, fetchOrderWell]);

  return <AgGridContainer colDefs={columnDefs} onGridReady={onGridReady} />;
};

export default AgGridSection;
