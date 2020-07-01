<template>
  <div>
    <h1>This is an admin page</h1>
    <h1 v-show="!visible">...loading</h1>
    <ul>
      <li v-show="visible" v-for="task in tasks">
        <p v-for="(value,key) in task">{{key}} : {{value}}</p>
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
    }
  }
}
</script>
