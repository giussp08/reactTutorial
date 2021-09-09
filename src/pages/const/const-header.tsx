
const columns = [
  {
    name: "Codice Pratica",
    selector: (row: any) => row.practiceCode,
    sortable: true,
  },
  {
    name: "Codice fiscale azienda",
    selector: (row: any) => row.companyTaxCode,
    sortable: true,
  },
  {
    name: "Ragione Sociale",
    selector: (row: any) => row.businessName,
    sortable: true,
  },
  {
    name: "Nome e cognome utente",
    selector: (row: any) => row.user,
    sortable: true,
  },
  {
    name: "Codice fiscale persona fisica",
    selector: (row: any) => row.taxCode,
    sortable: true,
  },
  {
    name: "NDG persona fisica",
    selector: (row: any) => row.ndg,
    sortable: true,
  },
  {
    name: "NDG persona giuridica",
    selector: (row: any) => row.ndgLegal,
    sortable: true,
  },
  {
    name: "Step",
    selector: (row: any) => row.step,
    sortable: true,
  },
  {
    name: "Pacchetto",
    selector: (row: any) => row.package,
    sortable: true,
  },
  {
    name: "Data ultima modifica Da",
    selector: (row: any) => row.lastEditDateFrom,
    sortable: true,
  },
  {
    name: "Data ultima modifica A",
    selector: (row: any) => row.lastEditDateTo,
    sortable: true,
  },
  {
    name: "Data avvio pratica",
    selector: (row: any) => row.practiceStartDate,
    sortable: true,
  },
];

export default columns;
