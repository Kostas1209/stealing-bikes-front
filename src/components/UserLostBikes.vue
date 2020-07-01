<template>
    <div>
        user lost bikes
        <h1 v-show="!isVisible">...loading</h1>
        <ul>
            <li v-show="isVisible" v-for="bike in lostBikes">
                <p v-for="(value,key) in bike">{{key}} : {{value}}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import config from "../../config";

    export default {
        name: "UserLostBikes",
        data()
        {
            return {
                isVisible: false,
                lostBikes: []
            }
        },
        methods: {
            async getData()
            {
                let res = await fetch(`${config.API_URL}/api/user/report?userId=1`)
                console.log(res)
                let data = await res.json();
                console.log(data)
                this.lostBikes = data.data;
                this.isVisible = true
            }
        },
        beforeMount()
        {
            this.getData()
        }
    }
</script>