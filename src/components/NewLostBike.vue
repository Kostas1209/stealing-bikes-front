<template>
    <div class="form">
        <label>Manufacturer</label>
        <input type="text" v-model="manufacturer" placeholder="Enter manufacturer" class="form-control" /><br>
        <label>Color</label>
        <input type="text" v-model="color" placeholder="Enter color" class="form-control" /><br>
        <label>Model</label>
        <input type="text" v-model="model" placeholder="Enter model" class="form-control" /><br>
        <label>Description</label>
        <textarea v-model="description" placeholder="Enter some details" class="form-control"></textarea>
        <button v-on:click="Submit" style="margin: 30px">Submit</button>
    </div>
</template>

<script lang="ts">
    import config from '../../config';

    export default {
        name: "NewLostBike",
        data()
        {
            return{
                manufacturer: "",
                color: "",
                model: "",
                description: ""
            }
        },
        methods:{
            Submit()
            {
                let data= {
                    userId: 1,
                    name: this.manufacturer,
                    color: this.color,
                    model: this.model,
                    description : this.description
                }
                fetch(`${config.API_URL}/api/user/report`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }
        }
    }
</script>
<style>
    .form
    {
        width: 50%;
        margin: 50px auto;
    }
</style>