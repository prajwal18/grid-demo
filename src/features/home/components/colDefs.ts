export const colDefs = [
  {
    headerName: "S.N",
    field: "serialNumber",
    valueGetter: function (params: any) {
      return params.node.rowIndex + 1;
    },
  },
  {
    field: "id",
  },
  {
    field: "status",
    // rowGroup: true
  },
  {
    field: "type",
  },
  {
    field: "plannedAt",
  },
  {
    field: "customerName",
  },
  {
    field: "customerErpId",
  },
  {
    field: "shipToName",
  },
  {
    field: "address",
  },
  {
    field: "plannedGal",
  },
  {
    field: "driverName",
  },
  {
    field: "deliveredGal",
  },
  {
    field: "supplierNames",
  },
  {
    field: "hubName",
  },
];
