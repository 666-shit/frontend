<!--顶部菜单栏下的内容，搜索，移除全部等，老人信息的显示-->
<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="请输入老人编号查询"
               v-model="eid"/>     <!--Search by num-->
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
                  @click="searchEid"
          >   <!--Search-->
            查询
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>老人列表</h4>   <!--Tutorials List-->
      <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index === currentIndex }"
            v-for="(student, index) in students"
            :key="index"
            @click="setActiveStudent(student, index)"
        >
          {{ student.eid }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllStudents">    <!--Remove All-->
        删除全部老人信息
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentElder">
        <h4>老人信息</h4>
        <div>
          <label><strong>老人编号:</strong></label> {{ currentElder.eid }}
        </div>
        <div>
          <label><strong>所在养老院:</strong></label> {{ currentElder.nursinghome }}
        </div>
        <div>
          <label><strong>姓名:</strong></label> {{ currentElder.name }}
        </div>
        <div>
          <label><strong>家庭住址:</strong></label> {{ currentElder.address }}
        </div>
        <div>
          <label><strong>房间号:</strong></label> {{ currentElder.roomid }}
        </div>
        <div>
          <label><strong>联系方式:</strong></label> {{ currentElder.phonenum }}
        </div>
        <div>
          <label><strong>是否在住？:</strong></label> {{ currentElder.nursing ? "离开养老院" : "在住" }}
        </div>
        <router-link :to="'/elders/' + currentElder.id" class="badge badge-warning">编辑老人信息</router-link>    <!--Edit-->
      </div>
      <div v-else>
        <br />
        <p>点击查看老人信息</p>    <!--Please click on a Student..-->
      </div>
    </div>
  </div>
</template>
<script>
import ElderService from "../services/ElderService";
export default {
  name: "students-list",
  data() {
    return {
      students: [],
      currentElder: null,
      currentIndex: -1,
      eid:""
    };
  },
  methods: {
    retrieveStudents() {
      ElderService.getAll()
          .then(response => {
            this.students = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveStudents();
      this.currentElder = null;
      this.currentIndex = -1;
    },
    setActiveStudent(student, index) {
      this.currentElder = student;
      this.currentIndex = student ? index : -1;
    },
    removeAllStudents() {
      ElderService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
    },

    searchEid() {
      ElderService.findByEid(this.eid)
          .then(response => {
            this.students = response.data;
            this.setActiveStudent(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveStudents();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
