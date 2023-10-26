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
                <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <ul class="list-unstyled ">
                        <li>
                            <div class="d-flex py-3"> 
                                <div class="pe-3">
                                    <i class="fa-solid fa-envelope fa-xl"></i>
                                </div>
                                <div>
                                     <a href="mailto: g.bozzolino@gmail.com" target="_blank" rel="noopener noreferrer" class="link-light link-opacity-25-hover link-underline-opacity-0">g.bozzolino@gmail.com</a>
                                </div>
                            </div>
                        </li>
                        <li> 
                            <div class="d-flex py-3">
                               <div class="pe-3 ">
                                    <i class="fa-solid fa-phone fa-xl"></i>
                               </div>
                               <div>
                                    +39 338.82.16.835
                               </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center ">
                    <ul class="list-unstyled ">
                        <li>
                            <div class="d-flex py-3 ">
                               <div class="pe-3">
                                    <i class="fa-brands fa-linkedin fa-xl"></i>
                               </div>
                               <div>
                                    <a href="https://www.linkedin.com/in/giacomo-bozzolino/" class="link-light link-opacity-25-hover link-underline-opacity-0">Linkedin</a>
                               </div>
                            </div>  
                        </li>
                        <li>
                            <div class="d-flex py-3">
                               <div class="pe-3">
                                    <i class="fa-brands fa-github fa-xl"></i>
                               </div>
                               <div>
                                    <a href="https://github.com/GiacomoBozzolino" class="link-light link-opacity-25-hover link-underline-opacity-0">Github</a>
                               </div>
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
        font-size: 1.5rem;
    }
    h2{
        padding-bottom: 50px;
    }
} 


@media only screen and (min-width: 600px){
   #contanct{
    ul{
        font-size: 2rem;
    }
    h2{
        padding-bottom: 100px;
    }
   }

}




</style>