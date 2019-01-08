var intialState={
bug:{
    bugsList:[{
        id:Date.now()+Math.random(),
        project:'Health',
        description:'This is bug for health product',
        priority:'Low'
    },{
        id:Date.now()+Math.random(),
        project:'Car',
        description:'This is bug for car product',
        priority:'High'
    },{
        id:Date.now()+Math.random(),
        project:'Bike',
        description:'TThis is bug for bike product',
        priority:'Low'
    },{
        id:Date.now()+Math.random(),
        project:'Home',
        description:'This is bug for home product',
        priority:'Medium'
    },{
        id:Date.now()+Math.random(),
        project:'ProHealth',
        description:'This is bug for ProHealth product',
        priority:'Medium'
    }],
    lastBug:'dfdfdf' 
}
,    generalInfo:'This is our Redux App for'
}

export default intialState;