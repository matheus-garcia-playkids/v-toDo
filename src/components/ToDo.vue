<template>


    <div class="groups">
        <Box v-for="group in groups" :key="group.id" :title="group.name" :items="group.items"></Box>
    </div>

</template>

<script>

    import Box from '@/components/Box.vue'

    export default {
        name: "ToDo",
        components:{
            Box
        },
        data(){
            return {
                groups: [
                    {
                        id: 1,
                        name: 'ToDo',
                        items: [
                            { id: 1, name: 'Item 1', classObject: 'element' },
                            { id: 2, name: 'Item 2', classObject: 'element' },
                            { id: 3, name: 'Item 3', classObject: 'element' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Doing',
                        items: [
                            { id: 4, name: 'Item 4', classObject: 'element'  },
                            { id: 5, name: 'Item 5', classObject: 'element'  },
                            { id: 6, name: 'Item 6', classObject: 'element'  }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Done',
                        items: [
                            { id: 7, name: 'Item 7', classObject: 'element'  },
                            { id: 8, name: 'Item 8', classObject: 'element'  },
                            { id: 9, name: 'Item 9', classObject: 'element'  }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>


    .groups{
        width: 100%;
        height: 100%;
        display: flex;
    }

</style>