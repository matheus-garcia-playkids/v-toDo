<template>
    <div id="menu">
        <ul>
            <li v-for="item in items">
                <router-link :to="{name: item.link,params: item.params}">{{item.ref}} </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            items: Array
        }
    }
</script>

<style scoped>

    #menu{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid black;
        padding: 10px;
    }

    ul{
        height: 100%;
        display: table;
        margin: 0 -20px;
        border-spacing: 20px 0px;
    }

    ul li{
        display: table-cell;
        vertical-align: middle;
        height: 100%;
    }

</style>