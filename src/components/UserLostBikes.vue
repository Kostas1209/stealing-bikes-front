<template>
    <div>
        <h1>user's lost bikes</h1>
        <h1 v-show="!isVisible">...loading</h1>
        <div class="form">
            <label>Change User Id</label>
            <input type="number" v-model="userId" placeholder="Enter user Id" class="form-control" /><br>
            <button v-on:click="this.ChangeId">Change</button>
        </div>
        <ul>
            <li v-show="isVisible" v-for="bike in lostBikes">
                <p>model : {{bike.model}}</p>
                <p>color : {{bike.color}}</p>
                <p>manufacturer : {{bike.name}}</p>
                <p>description : {{bike.description}}</p>
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
                lostBikes: [],
                userId : config.USER_ID
            }
        },
        methods: {
            async getData()
            {
                let res = await fetch(`${config.API_URL}/api/user/report?userId=${config.USER_ID}`)
                console.log(res)
                let data = await res.json();
                console.log(data)
                if(data.success)
                {
                    this.lostBikes = data.data;
                }
                else{
                    this.lostBikes = []
                }
                this.isVisible = true
            },
            async ChangeId()
            {
                config.USER_ID = this.userId;
                await this.getData()
            }
        },
        beforeMount()
        {
            this.getData()
        }
    }
</script>
<style >
    ul 
    {
        padding: 15px;
        align-self: center;
    }
    li
    {
        width: 50%;
        background: #eaebe9;
        padding : 8px;
        margin: 50px auto;
        border : 1px solid #161616;
    }
    .form
    {
        width: 50%;
        margin: 50px auto;
    }
</style>