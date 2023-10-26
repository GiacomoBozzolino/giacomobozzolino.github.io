<script>
export default {
    name: 'AppContact',
    
}
</script>

<template lang="">
    <div id="contact">
        <div class="container text-center">
            <div class="row">
                <div class=col-12>
                    <div  class="m-2 p-2 " >
                    <h2>
                        ciao, questi sono i miei contatti
                    </h2>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <ul class="list-unstyled">
                        <li>
                            <div> 
                                
                                    <i class="fa-solid fa-envelope"></i>
                                
                                mail
                            </div>
                            <div>g.bozzolino@gmail.com</div>
                        </li>
                        <li>
                            telefono
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-6">
                    <ul class="list-unstyled">
                        <li>
                           Linkedin
                        </li>
                        <li>
                            Github
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
     
</template>

<style lang="scss" scoped>
   #contact{
    background-color: rgba(22, 109, 8, 0.469);
    color: white;
    min-height: 70vh;
} 
</style>