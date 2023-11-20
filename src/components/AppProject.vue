<script>
export default {
    name: 'AppProject',
    

  

}


</script>

<template lang="">
   <div id="project" class="d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-12 ">
                    <div class="text-center " >
                        <h2 class="section">My Projects</h2>
                        <div class="w-100">
                            <ul class="d-flex align-items-center justify-content-center w-100">
                                <li>
                                    <img src="../assets/HTML5.png" alt="">
                                </li>
                                <li>
                                    <img id="css" src="../assets/CSS3.png" alt="">
                                </li>
                                <li>
                                    <img src="../assets/Bootstrap.png" alt="">
                                </li>
                                <li>
                                    <img src="../assets/JavaScript-logo.png" alt="">
                                </li>
                                <li>
                                    <img src="../assets/vue-js-icon-2048x1766-btrgkrhi.png" alt="">
                                </li>
                                <li>
                                    <img src="../assets/vitejs.png" alt="">
                                </li>
                                <li>
                                    <img src="../assets/sass.png" alt="">
                                </li>
                                <li>
                                    <img src="../assets/PHP.png" alt="">
                                </li>
                                <li>
                                    <img src="../assets/laravel.png" alt="">
                                </li>
                                <li>
                                    <img src="../assets/PhpMyAdmin_logo_2010_hidef.svg.png" alt="">
                                </li>
                              
                                <li>
                                    <img src="../assets/MySQL.png" alt="">
                                </li>
                            </ul>
                            <div class="pt-2">
                                Qui puoi vedere alcuni dei miei progetti! 
                            </div>
                            
                        </div>
                    </div>    
                </div>

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/ricerca_avanzata.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/spotify.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/Boolflix.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/campominato.png" class="d-block w-100" alt="...">
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
   
   
   
        
</template>

<style lang="scss" scoped>

#project{
    background-color: rgb(20, 20, 20);
    color: white;
    padding-top: 70px;
    min-height: 100vh;
    // h2{
    //     text-transform: uppercase;
    //     font-size: 150px;
    //     text-shadow: 6px 0px 1px #4c4c4c;
    // }

    ul{
        padding: 0;
        flex-wrap: wrap;
        list-style: none;
        img{
            width: 60px;
            transition: transform 0.3s ease-in-out
            // height: 100PX;
        }
        li{
          
            padding-inline: 10px;
        }
        #css{
            padding: 13px;
        }


        img:hover {
           
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.5); 
        }
    }

}
@media only screen and (min-width: 992px){
    #project{
        ul{
            img{
            width: 95px;
            flex-wrap: nowrap;
            // height: 100PX;
        } 
        }
        
    }
   
}



    
</style>