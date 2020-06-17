<template>
<div>
    <sidebar-menu
    :menu="menu"
    :item="menu.item"
    :rtl="true"
    :collapsed="true"
    :disableHover="true"
    @item-click="logout"
  ><Logout/>
  </sidebar-menu>

  </div>

</template>

<script>


    export default {

        props: {

            collapsed: {
                    type: Boolean,
                    default: true
                 },
        },
        data() {
            return {

                menu: [

                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Home',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/contact',
                        title: 'Contact',
                        icon: 'fa fa-spinner',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    },
                      {
                        item: 'logout',
                        title: 'Logout',
                        icon: 'fa fa-user'
                    },
                ]
            }
        },
        methods: {
            logout(event, item) {

                if(item.item === 'logout') {
                    document.getElementById('logout-form').submit()
                }
            }
        }
    }
</script>
