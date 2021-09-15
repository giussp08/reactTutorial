const constRepre =[
    {
        name:"Nome e Cognome",
        selector: (row: any) => row.user,
        sortable:true
    },
    {
        name:"Codice fiscale",
        selector: (row: any) => row.taxCode,
        sortable:true
    },
    {
        name:"Ndg",
        selector: (row: any) => row.ndg,
        sortable:true
    },
    {
        name:"Telefono",
        selector: (row: any) => row.telephone,
        sortable:true
    },
    {
        name:"E-Mail",
        selector: (row: any) => row.email,
        sortable:true
    },
    {
        name:"Luogo di nascita",
        selector: (row: any) => row.birthplace,
        sortable:true
    },
    {
        name:"Data di nascita",
        selector: (row: any) => row.birthdate,
        sortable:true
    },
]

export default constRepre;
