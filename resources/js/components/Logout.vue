<template>
    <div>
        <!-- <button type="submit" @click.prevent="logout">Logout</button> -->
        <span class="alert alert-danger" role="alert" @click.prevent="logout">
            Logout
            </span>
    </div>
</template>

<script>
    export default {
        name: 'Logout',
        methods: {
            logout() {
                document.getElementById('logout-form').submit()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
