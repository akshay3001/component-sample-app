angular.module("app")
.component("a1" , {
    template : '<h1>{{name}}</h1>',
    controller : 'myController'
})
.component("a2" , {
    template : '<h1>{{lastName}}</h1>',
    controller : 'secondController'
})