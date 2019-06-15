<template>
    <div class="appmain-container">
        <transition name="main" mode="out-in">
            <!-- <keep-alive>  -->
            <router-view></router-view>
            <!-- </keep-alive> -->
        </transition>
    </div>
</template>


<script>
export default {
    
}
</script>


<style>

    .appmain-container{

        width: 100%;
        height: calc(100% - 70px);
        overflow: auto;
    }
    .main-enter,.main-leave-to {
      opacity: 0;
      transform: translateX(50px)
    }
    .main-enter-active,.main-leave-active {
      transition: all 0.5s ease
    }
</style>
