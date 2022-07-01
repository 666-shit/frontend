<!--添加信息界面-->
<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nursinghome">养老院</label>
        <input
            type="text"
            class="form-control"
            id="nursinghome"
            required
            v-model="elder.nursinghome"
            name="nursinghome"
        />    <!--输入内容，字段为id=academy，student中添加academy-->
      </div>

      <div class="form-group">
        <label for="name">姓名</label>
        <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="elder.name"
            name="name"
        />    <!--输入内容，字段为id=academy，tutorial中添加academy-->
      </div>

      <div class="form-group">
        <label for="eid">老人编号</label>
        <input
            type="text"
            class="form-control"
            id="eid"
            required
            v-model="elder.eid"
            name="eid"
        />    <!--输入内容，字段为id=academy，tutorial中添加academy-->
      </div>

      <div class="form-group">
        <label for="roomid">房间号</label>
        <input
            type="text"
            class="form-control"
            id="roomid"
            required
            v-model="elder.roomid"
            name="roomid"
        />
      </div>

      <div class="form-group">
        <label for="address">家庭住址</label>
        <input
            type="text"
            class="form-control"
            id="address"
            required
            v-model="elder.address"
            name="address"
        />
      </div>

      <div class="form-group">
        <label for="sex">性别</label>
        <input
            type="text"
            class="form-control"
            id="sex"
            required
            v-model="elder.sex"
            name="sex"
        />
      </div>

      <div class="form-group">
        <label for="age">年龄</label>
        <input
            type="text"
            class="form-control"
            id="age"
            required
            v-model="elder.age"
            name="age"
        />
      </div>

      <div class="form-group">
        <label for="phonenum">联系方式</label>
        <input
            type="text"
            class="form-control"
            id="phonenum"
            required
            v-model="elder.phonenum"
            name="phonenum"
        />
      </div>


      <button @click="saveStudent" class="btn btn-success" >发送</button>   <!--Submit-->
    </div>
    <div v-else>    <!--新界面，弹出添加成功信息-->
      <h4>发送成功</h4>    <!--You submitted successfully!-->
      <button class="btn btn-success" @click="newStudent">继续添加</button>   <!--Add-->
    </div>
  </div>
</template>
<script>
import ElderService from "../services/ElderService";
export default {
  name: "add-student",
  data() {
    return {
      elder: {
        id: null,
        nursinghome: "",
        name:"",
        eid: "",
        roomid:"",
        address:"",
        sex:null,
        age:null,
        phonenum:"",
        nursing: false
      },
      submitted: false
    };
  },
  methods: {
    saveStudent() {
      var data = {
        nursinghome: this.elder.nursinghome,
        name:this.elder.name,
        eid: this.elder.eid,
        roomid: this.elder.roomid,
        address: this.elder.address,
        sex:this.elder.sex,
        age:this.elder.age,
        phonenum:this.elder.phonenum
      };
      ElderService.create(data)
          .then(response => {
            this.elder.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
    },

    newStudent() {
      this.submitted = false;
      this.elder = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>