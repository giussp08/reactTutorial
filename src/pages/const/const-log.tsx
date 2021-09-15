const constLog =[
    {
        name:"Data operazione",
        selector: (row: any) => row.dateLog,
        sortable:true
    },
    {
        name:"Orario",
        selector: (row: any) => row.time,
        sortable:true
    },
    {
        name:"Descrizione",
        selector: (row: any) => row.desc,
        sortable:true
    }
]

export default constLog;
