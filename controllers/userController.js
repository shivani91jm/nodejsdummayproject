exports.getUsers = (req,res) =>{
    const dummyUser  =[
         {
           id: 1, name: "shivani"
         },
         {
            id : 2, name: "Harsh"
         }
    ];
    res.json(dummyUser);
   
}
exports.getSingleUser =(req,res) =>{
    const shivi =[
        {
            id:1,name :"shivi"
        }
    ];
    res.json(shivi);

}