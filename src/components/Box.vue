<template>
    <div class="box">
        <div class="header">
            <div class="title">{{title}}</div>
        </div>
        <ul class="list">

            <draggable class="list-group" :key="title" :name="title" :list="items" group="ToDo" @change="log" draggable=".box .list .item">
                <li class="item"
                        v-for="item in items"
                        :key="item.id"
                        :data-id="item.id"
                        v-bind:class="item.classObject"
                >
                    <label v-text="item.name"></label>
                </li>
            </draggable>
        </ul>
    </div>
</template>

<script>

    setInterval(function(){

        let elements = document.getElementsByClassName("active");

        for(let i=0; i< elements.length; i++){
            elements[i].classList.remove("active");
        }

    },2000);

    import draggable from "vuedraggable";

    export default {
        name: "Box",
        components:{
            draggable
        },
        props:{
            title: String,
            classObject: String,
            items: Array
        },
        methods:{
            log: function(evt) {
                window.console.log(evt);

                if(typeof evt.moved != "undefined") {
                    this.moved(evt.moved.element);
                }
                if(typeof evt.added != "undefined") {
                    this.moved(evt.added.element);
                }

            },
            moved: function(element){

                let originalClass = element.classObject;
                element.classObject = originalClass+" active";

                setTimeout(function(){
                    element.classObject = originalClass;
                }, 3000);
            }
        }
    }
</script>

<style scoped>

    .box{
        width: 100%;
        margin: 20px;
        border: 1px solid #ededed;
        box-shadow: 0px 0px 12px 9px #ededed;
    }

    .header{

        width: 100%;
        height: 50px;
        border-bottom: 3px solid #fafafa;
        display: table;
    }

    .header .title{
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }

    ul {
        padding: 5px 15px;
    }

    li{
        list-style: none;
    }

    .list,.list-group{
        height: 100%;
    }

    .sortable-chosen{
        background-color: #ededed;
    }

    .element{
        background-color: rgba(237,237,237,0);
        transition: background-color 1s 0s ease-in-out;
    }

    .element.active{
        background-color: rgba(237,237,237,1);
    }

</style>