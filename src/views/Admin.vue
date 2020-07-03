<template>
  <div>
    <h1>This is an admin page</h1>
    <h1 v-show="!visible">...loading</h1>
    <div class="form">
        <label>Change Admin Id</label>
        <input type="text" v-model="adminId" placeholder="Enter admin Id" class="form-control" /><br>
        <button v-on:click="this.onChangeAdminId">Change</button>
    </div>
    <ul>
      <li v-show="visible" v-for="task in tasks">
        <p>bike id : {{task.bikeId}}</p>
        <p>begin date: {{task.beginDate}}</p>
        <p v-show="task.isDone">end date : {{task.endDate}}</p>
        <button v-show="!task.isDone" v-on:click="onChangeStatus">Change as Done</button>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '../../config'
export default {
  name: "Admin",
  data(){
    return{
    visible: false,
    tasks : [],
    adminId: config.ADMIN_ID
    }
  },
  beforeMount()
  {
    this.getData()
  },
  methods: {
    async getData()
    {
      let res = await fetch(`${config.API_URL}/api/admin/task?adminId=${config.ADMIN_ID}`)
      console.log(res)
      let data = await res.json();
      console.log(data)
      if(data.success === true)
      {
        this.tasks = data.data;
      }
      else{
        this.tasks = []
      }
      this.visible = true
    },
    onChangeStatus()
    {
      let res = fetch(`${config.API_URL}/api/admin/task`,
      {
        method: "PUT",
        body: JSON.stringify({adminId : config.ADMIN_ID}),
        headers: {
                        'Content-Type': 'application/json'
                    },
      })
      res.then(response => window.location.reload())
    },
    async onChangeAdminId()
    {
      config.ADMIN_ID = this.adminId;
      await this.getData()
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
