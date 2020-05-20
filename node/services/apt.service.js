const db = require('../_helpers/database');
const Apts = db.Apts;

module.exports = {
    createApt,
    getApts,
};

async function createApt(apt) {
    // validate
    if (await Apts.findOne({ createdDate: apt.createdDate  })) {
        throw 'article created on ' + apt.createdDate + ' already exists';
    }
    else if(!apt.createdDate){
        throw 'Error with the user submitting the request. User information missing. Malformed request.';
    }

    console.log('***************************************************');
    console.log('in db service ', apt);

    let error = false;
    let add = await Apts.create(apt, (err, result) => {
        if (err) {
            error = true;
            console.log('bad')
        }
        else {
            console.log('good')
        }
    });

    return { result: 'it done' };

}

async function getApts(){

    let apt = await Apts.find({});

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(apt);
        },10);

    });
}
