const Expense= require('../models/expense');


exports.postAddExpense = async (req,res,next) => {

    try{
        const amnt=req.body.amount;
        const descr=req.body.desc;
        const catego=req.body.categ;

        const data= await Expense.create({amount:amnt, description:descr, category:catego});
        res.status(201).json({newExpenseDetail: data});
    } catch(err){
        res.status(500).json({
            error:err
        })
    }
}


exports.getExpenses = async (req,res,next)=>{

    try{
        const expenses = await Expense.findAll();
        res.status(201).json({allExpenses : expenses});
    } catch(err){
        console.log('GET User is failing', JSON.stringify(err));
        res.status(500).json({error:err})
    }
}


exports.deleteExpense = (req,res,next)=>{
    
    try{
        if(req.params.id=='undefined'){
            console.log('Id is missing')
            return res.status(400).json({err: 'Id is missing'});
        }
        
        const uId = req.params.id;
        Expense.destroy({where: {id:uId}});
        res.status(200);

    } catch(err){
        console.log(err);
        res.status(500).json({error:err})
    }
}

exports.editExpense = (req,res,next)=>{
    
    try{
        if(req.params.id=='undefined'){
            console.log('Id is missing')
            return res.status(400).json({err: 'Id is missing'});
        }
        
        const uId = req.params.id;
        Expense.destroy({where: {id:uId}});
        res.status(200);

    } catch(err){
        console.log(err);
        res.status(500).json({error:err})
    }
}




// try{
//     if(req.params.id=='undefined'){
//         console.log('Id is missing')
//         return res.status(400).json({err: 'Id is missing'});
//     }
    
//        const uId = req.params.id;
//        const amount=req.body.amnt;
//        console.log(amount);
//        const description=req.body.desc;
//        const category= req.body.categ;

//     Expense.findByPk(uId)
//     .then(data=> {
//         data.amount=amount;
//         data.description=description;
//         data.category= category;
//         console.log(data);
//         data.save();
//         return res.status(201).json({newExpenseDetail: data});
//     })
//     .catch(err => console.log(err))
    

// } catch(err){
//     console.log(err);
//     res.status(500).json({error:err})
// }