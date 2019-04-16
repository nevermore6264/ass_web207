'use strict';

var quizApp = angular.module('angularQuizcatApp', ['quizcatServices']);
quizApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/quizes', {
            templateUrl: 'views/quiz-list.html',
            controller: 'QuizListCtrl'
        })
        .when('/quiz/:quizId', {
            templateUrl: 'views/quiz.html',
            controller: 'QuizCtrl'
        })
        .when('/results', {
            templateUrl: 'views/quiz-result.html',
            controller: 'ResultCtrl'
        })
        .when("/feedback", {
            templateUrl: "pages/feedback.html"
        })
        .when("/contact", {
            templateUrl: "pages/contact.html"
        })
        .when("/info", {
            templateUrl: "pages/info_user.html"
        })
        .when("/faq", {
            templateUrl: "pages/faq.html"
        })
        .when("/logout", {
            templateUrl: "pages/login.html"
        })
        .when("/infomation", {
            templateUrl: "pages/introduction.html"
        })
        .when("/logout", {
            templateUrl: "pages/login.html"
        })
        .when("/login", {
            templateUrl: 'views/quiz-list.html',
            controller: 'QuizListCtrl'
        })
        .otherwise({
            redirectTo: '404.html'
        });
}]);

quizApp.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Có lỗi")
    });
})
