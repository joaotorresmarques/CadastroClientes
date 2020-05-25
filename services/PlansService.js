const Database = require('../models/index');

class PlansService {
    
    constructor(){
        this.Plan = Database['Plan'];
    }

    async GetAll(){
        try{
            return await this.Plan.findAll({raw:true})
        }catch(err){
            return undefined
        }
       
    }

    async Store(plans){

        let errors = {};
        

        if (plans.import != undefined){
            plans.import = true;
        }else{
            plans.import = false;
        }

        let isValid = this.Validate(plans,errors)

        if (isValid == true){
            try{    
                await this.Plan.create(plans);
                return true;
            }catch(err){
                errors.systemMsg = ('Ocorreu um erro ao salvar o plano');
                return errors;
            } 
        }else {
            return errors;
        }

       
    }

    Validate(plans,errors){
        let countErrors = 0;

        if(plans.title == undefined){
            errors.title_msg = 'O título é inválido';
            countErrors++;
        }else if(plans.title < 3){
            errors.title_msg = 'O título é inválido';
            countErrors++;
        }

        if(plans.list == undefined){
            errors.list_msg = 'O número de listas é inválido';
            countErrors++;
        }else if(plans.list <= 0){
            errors.list_msg = 'O número de listas é inválido';
            countErrors++;
        }

        if(plans.client == undefined){
            errors.client_msg = 'O número de clientes é inválido';
            countErrors++;
        }else if(plans.client <= 0){
            errors.client_msg = 'O número de clientes é inválido';
            countErrors++;
        }

        if(plans.value == undefined){
            errors.value_msg = 'O valor é inválido';
            countErrors++;
        }else if(plans.value < 0){
            errors.value_msg = 'O valor é inválido';
            countErrors++;
        }

        if(countErrors > 0){
            return false;
        }else{
            return true;
        }
    }

}


module.exports = new PlansService;



