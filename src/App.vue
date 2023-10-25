<script>
import HomePage from './pages/HomePage.vue';
import AppHeader from './components/AppHeader.vue';
import AppContact from './components/AppContact.vue';
import AppProject from './components/AppProject.vue';

export default{
  components:{
    HomePage,
    AppHeader,
    AppContact,
    AppProject,
  }

}

</script>

<template>
  <AppHeader/>
  <HomePage/>
  <AppContact/>
  <AppProject/>

  
</template>

<style scoped>

</style>
