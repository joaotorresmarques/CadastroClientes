
const PlansService = require('../services/PlansService');

class PlansController {

    Index(req,res){
        res.render('plans')
    }

    Create (req,res){
        res.render('plans/create',{
            title_msg:req.flash('title_msg'),
            list_msg:req.flash('list_msg'),
            client_msg:req.flash('client_msg'),
            value_msg:req.flash('value_msg')
        })
    }

    async Store (req,res){
        
        let title = req.body.title;
        let list = req.body.list;
        let client = req.body.client;
        let value = req.body.value;
        let imports = req.body.imports;

        let plans = {
            title:title,
            list:list,
            client:client,
            value:value,
            import:imports
        };

        

        let result = await PlansService.Store(plans);
        res.json(result)
        
        // if(result == true){
        //     let success = {};
        //     success.success_msg = ('Tudo certo, Plano Salvo!!')
        //     req.flash('success_msg',success.success_msg);
        //     res.redirect('/admin/plans');
        // }else{
        //     req.flash('title_msg', result.title_msg);
        //     req.flash('list_msg', result.list_msg);
        //     req.flash('client_msg', result.client_msg);
        //     req.flash('value_msg', result.value_msg);
        //     res.redirect('/admin/plans/create');
        // }
    }

    async ListAll(req,res){
        let plans = await PlansService.GetAll();
        res.render('plans/planslist', {
            plans:plans,
            success_msg: req.flash('success_msg')
        })
    }

}


module.exports = new PlansController;