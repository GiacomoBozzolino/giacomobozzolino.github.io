<script>
import HomePage from './pages/HomePage.vue';
import AppHeader from './components/AppHeader.vue';
import AppContact from './components/AppContact.vue';
import AppProject from './components/AppProject.vue';
import AppAbout from './components/AppAbout.vue';

export default{
  components:{
    HomePage,
    AppHeader,
    AppContact,
    AppProject,
    AppAbout,
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
    <AppAbout/>
  </main>

  <footer>
    <AppContact/>
  </footer>
    
  
  
  
</template>

<style lang="scss" >


</style>
