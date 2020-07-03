<template>
  <div>
    <h1>This is an admin page</h1>
    <h1 v-show="!visible">...loading</h1>
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
    tasks : []
    }
  },
  beforeMount()
  {
    this.getData()
  },
  methods: {
    async getData()
    {
      let res = await fetch(`${config.API_URL}/api/admin/task?adminId=5efc4f0654578a2af9ab4164`)
      console.log(res)
      let data = await res.json();
      console.log(data)
      this.tasks = data.data;
      this.visible = true
    },
    onChangeStatus()
    {
      let res = fetch(`${config.API_URL}/api/admin/task`,
      {
        method: "PUT",
        body: JSON.stringify({adminId : "5efc4f0654578a2af9ab4164"}),
        headers: {
                        'Content-Type': 'application/json'
                    },
      })
      res.then(response => window.location.reload())
    }
    
  }
}
</script>
