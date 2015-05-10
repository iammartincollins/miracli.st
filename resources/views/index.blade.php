<html ng-app="MListApp">
    <head>
        <title>MList</title>
        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <script type="text/javascript" src="/js/app.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-resource.min.js" type="text/javascript"></script>

    </head>
    <body>
        <div ng-include="'templates/common/header.tpl.html'"></div>
        <!-- <div ng-include="'notifications.tpl.html'"></div> -->
        <div ui-view="main" class="container"></div>
        <div ng-include="'templates/common/footer.tpl.html'"></div>
    </body>
</html>
