import { toast } from "react-toastify";
import { useEffect, useMemo } from "react";
import { colDefs } from "./colDefs";
import AgGridContainer from "../../../components/layout/AgGridContainer";
import { useFetchFilteredOrderWellLazyQuery } from "../../../generated/graphql";

const AgGridSection = () => {
  const [fetchOrderWell, { loading, error, data }] =
    useFetchFilteredOrderWellLazyQuery();

  const columnDefs = useMemo(() => colDefs, []);

  const rowData = useMemo(() => {
    console.log("Loading", loading, "Error", error, "Data", data)
    if (!loading && !error && data) {
      return data.filteredOrderWell.collection;
    } else {
      if (error) {
        toast.error(error.message);
      }
      return [];
    }
  }, [loading, error, data]);

  useEffect(() => {
    fetchOrderWell({ variables: { skip: 0, take: 10 } });
  }, [fetchOrderWell]);

  return <AgGridContainer colDefs={columnDefs} rowData={rowData} />;
};

export default AgGridSection;
