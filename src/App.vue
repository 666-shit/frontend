<!--界面-->
<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src=".\assets\1.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Welcome to the nursing management system!</h5>    <!--图片显示标题-->
          <p>You can add some elders and nursing homes to this system.</p>   <!--图片显示内容-->
        </div>
      </div>
      <div class="carousel-item">
        <img src=".\assets\2.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>最佳创新养老院！</h5>
          <p>你是养老院的管理员，你可以使用此系统来管理老人</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src=".\assets\3.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>一起编辑老人吧！</h5>
          <p>你可以自由设定老人的任何信息，自由的让老人进出养老院！</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
  <div id="app">
    <nav className="navbar navbar-expand navbar-dark bg-dark">    <!--头部菜单栏-->

      <div className="navbar-brand"> |养老院管理系统| </div>>
      <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <router-link to="/elders" className="nav-link"> 介绍 </router-link>
          </li>>
        <li className="nav-item">
          <router-link to="/add" className="nav-link"> 添加老人 </router-link>
        </li>>
        <li className="nav-item">
          <router-link to="/Show" className="nav-link"> 查看老人信息 </router-link>
        </li>>
      </div>
    </nav>
    <div className="container mt-3">    <!--菜单栏下的部分-->
      <router-view/>    <!--此处对应TutorialsList.vue-->
    </div>
  </div>
</template>


<script>
export default {
  name: "app"
};
</script>