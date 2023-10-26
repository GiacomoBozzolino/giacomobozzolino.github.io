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
                               Email
                            </div>
                            <div>
                                g.bozzolino@gmail.com
                            </div>
                        </li>
                        <li> 
                            <div>
                               <i class="fa-solid fa-phone"></i>
                            telefono 
                            </div>
                            
                            <div>
                                +39 3388216835
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="col-12 col-lg-6">
                    <ul class="list-unstyled">
                        <li>
                            <div>
                               <i class="fa-brands fa-linkedin"></i>
                                Linkedin 
                            </div>
                        </li>
                        <li>
                            <div>
                               <i class="fa-brands fa-github"></i>
                                Github
                            </div>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
     
</template>

<style lang="scss" scoped>
   #contact{
    background-color: rgb(20, 20, 20);
    color: white;
    min-height: 40vh;
} 
</style>