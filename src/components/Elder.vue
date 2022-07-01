<!--编辑界面-->
<template>
  <div v-if="currentElder" class="edit-form">
    <h4>老人信息</h4>
    <form>
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name"
               v-model="currentElder.name"
        />
      </div>
      <div class="form-group">
        <label for="eid">老人编号</label>
        <input type="text" class="form-control" id="eid"
               v-model="currentElder.eid"
        />
      </div>
      <div class="form-group">
        <label for="nursinghome">所在养老院</label>
        <input type="text" class="form-control" id="nursinghome"
               v-model="currentElder.nursinghome"
        />
      </div>
      <div class="form-group">
        <label for="address">家庭住址</label>
        <input type="text" class="form-control" id="address"
               v-model="currentElder.address"
        />
      </div>
      <div class="form-group">
        <label for="roomid">房间号</label>
        <input type="text" class="form-control" id="roomid"
               v-model="currentElder.roomid"
        />
      </div>
      <div class="form-group">
        <label for="phonenum">联系方式</label>
        <input type="text" class="form-control" id="phonenum"
               v-model="currentElder.phonenum"
        />
      </div>
      <div class="form-group">
        <label><strong>Nursing:</strong></label>
        {{ currentElder.nursing ? "已离开养老院" : "在住" }}
      </div>
    </form>
    <button class="badge badge-primary mr-2"
            v-if="currentElder.nursing"
            @click="updateNursing(false)"
    >
     入住
    </button>
    <button v-else class="badge badge-primary mr-2"
            @click="updateNursing(true)"
    >
      离开
    </button>
    <button class="badge badge-danger mr-2"
            @click="deleteStudent"
    >
      删除信息
    </button>
    <button type="submit" class="badge badge-success"
            @click="updateStudent"
    >
      保存
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Student...</p>
  </div>
</template>
<script>
import ElderService from "../services/ElderService";
export default {
  name: "student",
  data() {
    return {
      currentElder: null,
      message: ''
    };
  },
  methods: {
    getStudent(id) {
      ElderService.get(id)
          .then(response => {
            this.currentElder = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    updateNursing(nursing) {    //可编辑对象->增加2个
      var data = {
        id: this.currentElder.id,
        eid: this.currentElder.eid,
        name: this.currentElder.name,
        nursinghome:this.currentElder.nursinghome,
        address: this.currentElder.address,
        roomid: this.currentElder.roomid,
        phonenum:this.currentElder.phonenum,
        nursing: nursing
      };
      ElderService.update(this.currentElder.id, data)
          .then(response => {
            console.log(response.data);
            this.currentElder.nursing = nursing;
            this.message = '更新成功';
          })
          .catch(e => {
            console.log(e);
          });
    },
    updateStudent() {
      ElderService.update(this.currentElder.id, this.currentElder)
          .then(response => {
            console.log(response.data);
            this.message = '保存成功';
          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteStudent() {
      ElderService.delete(this.currentElder.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "students" });
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.message = '';
    this.getStudent(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
