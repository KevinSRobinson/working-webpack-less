var adminLayoutExample = {
    controllerAs: "vm",
    controller: function () {
        var vm = this;

        vm.userName = "Test Username";

        vm.sideMenuItems = [{
            state: "home",
            linkText: "Home",
            icon: "check",
            requiresLogin: false
        },
        {
            state: "logEvents",
            linkText: "Action Logs",
            icon: "users",
            requiresLogin: false
        },
        {
            state: "lookupLists",
            linkText: "Lookup Lists",
            icon: "users",
            requiresLogin: false
        },
        {
            state: "lookupListnames",
            linkText: "Lookup List Names",
            icon: "users",
            requiresLogin: false
        }
        ];

        vm.userMenuItems = [{
            state: "userprofile",
            linkText: "User Profile",
            icon: "user"
        }, {
            state: "useroptions",
            linkText: "User Options",
            icon: "cogs"
        }, {
            state: "logout",
            linkText: "Logout",
            icon: "cogs"
        }, {
            state: "login",
            linkText: "Login",
            icon: "check"
        }];

        vm.alertMenuItems = [{
            state: "alert1",
            linkText: "Alert 1",
            icon: "bell"
        }, {
            state: "alert2",
            linkText: "Alert 3",
            icon: "bell"
        }];

        vm.footerLinks = [{
                state: 'link1',
                linkText: "Link 1"
            }, {
                state: 'link2',
                linkText: "Link 2"
            }, {
                state: 'link3',
                linkText: "Link 3"
            },

        ]
    },
    template: require("raw-loader!./adminLayoutExampleTemplate.html")
};

angular.module("examples").component("adminLayoutExample", adminLayoutExample)
