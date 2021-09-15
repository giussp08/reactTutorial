const constDoc =[
    {
        name:"Tipo",
        selector: (row: any) => row.type,
        sortable:true
    },
    {
        name:"Nome",
        selector: (row: any) => row.name,
        sortable:true
    },
    {
        name:"Caricato da",
        selector: (row: any) => row.user,
        sortable:true
    },
    {
        name:"Data caricamento",
        selector: (row: any) => row.date,
        sortable:true
    }
]

export default constDoc;
