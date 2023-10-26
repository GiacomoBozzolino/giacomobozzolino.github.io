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
  <header class="sticky-top">
    <AppHeader/>
  </header>
  
  <main>
    <HomePage/>
    <AppProject/>
    <AppContact/>
  </main>
    
  
  
  
</template>

<style lang="scss" >


</style>
