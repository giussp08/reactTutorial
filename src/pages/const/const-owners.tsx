const constOwners =[
    {
        name:"Nome e Cognome",
        selector: (row: any) => row.user,
        sortable:true
    },
    {
        name:"Residenza fiscale 1",
        selector: (row: any) => row.taxResidence1,
        sortable:true
    },
    {
        name:"Codice fiscale 1",
        selector: (row: any) => row.taxCode1,
        sortable:true
    },
    {
        name:"Residenza fiscale 2",
        selector: (row: any) => row.taxResidence2,
        sortable:true
    },
    {
        name:"Codice fiscale 2",
        selector: (row: any) => row.taxCode2,
        sortable:true
    },
    {
        name:"Residenza fiscale 3",
        selector: (row: any) => row.taxResidence3,
        sortable:true
    },
    {
        name:"Codice fiscale 3",
        selector: (row: any) => row.taxCode3,
        sortable:true
    },
]

export default constOwners;
