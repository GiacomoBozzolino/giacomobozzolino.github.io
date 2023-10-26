<script>
export default {
    name: 'AppContact',
    
}
</script>

<template lang="">
    <div id="contact" class="d-flex justify-content-center align-items-center">
        <div class="container text-center">
            <div class="row">
                <div class=col-12>
                    <div  class="m-2 p-2 " >
                    <h2 class="section ">
                       My Contact
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
                                <a href="mailto: g.bozzolino@gmail.com" target="_blank" rel="noopener noreferrer">Email Us</a>
                               
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
                               <a href="">Linkedin</a>
                                 
                            </div>
                        </li>
                        <li>
                            <div>
                               <i class="fa-brands fa-github"></i>
                                <a href="http://">Github</a>
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
    min-height: 100vh;
    padding-top: 50px;
    ul{
        font-size: 2rem;
    }
    h2{
        padding-bottom: 100px;
    }
} 
</style>