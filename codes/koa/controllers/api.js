const appjson = 'application/json';

let users = {
    id:0, type:"users", length: 6, data:[
        {id:1, name:'zs3', username:"bret", email:"aaa@bbb.ccc", address:"cc", phone:"1-333-333-333"},
        {id:2, name:'zs', username:"bret", email:"aaa@bbb.ccc", address:"cc", phone:"1-333-333-333"},
        {id:3, name:'zs', username:"bret", email:"aaa@bbb.ccc", address:"cc", phone:"1-333-333-333"},
        {id:4, name:'zs', username:"bret", email:"aaa@bbb.ccc", address:"cc", phone:"1-333-333-333"},
        {id:5, name:'zs', username:"bret", email:"aaa@bbb.ccc", address:"cc", phone:"1-333-333-333"},
    ],
}

var usersB = [
    {id:1, name:'bb', username:"bret", email:"aaa@bbb.ccc", address:"cc", phone:"1-333-333-333"},
];

function copy(obj){
    str = JSON.stringify(obj), //系列化对象
    newobj = JSON.parse(str); //还原
    return newobj;
}

module.exports = {
    'GET /api/users': async(ctx, next) => {
        ctx.response.type = appjson;
        ctx.response.body = {
            users: users
        };
    },
    'POST /api/users': async(ctx, next)=>{
        var p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price
        };
        users.push(p);
        ctx.response.type = appjson;
        ctx.response.body = p;
    },
    'DELETE /api/users/:id': async (ctx, next) => {
        var id = ctx.params.id;
        if (id) {
            ctx.rest(id);
        } else {
            throw new APIError('product:not_found', 'product not found by id.');
        }
    },
    //额外的设计 例子
    //http://127.0.0.1:3000/api/users?start=0&end=2
    'GET /api/users': async(ctx, next) => {
        ctx.response.type = appjson;
        var start = ctx.query.start;
        var end = ctx.query.end;
        // var obj = JSON.parse(users);
        var temp = copy(users);
        temp.data = temp.data.slice(start, end);
        ctx.response.body = {
            users: temp
        };
        console.log(users.data.length, start, end);
    },
};

