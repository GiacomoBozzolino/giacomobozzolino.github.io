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
                        <div>
                            Qui puoi vedere alcuni dei miei progetti!
                        </div>
                    </div>    
                </div>
                <div class="col-12">
                    <div id="carouselExampleAutoplaying" class="carousel slide pointer-event" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../assets/ricerca_avanzata.png" class="d-block w-100" alt="ricerca avanzata boolbnb">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/spotify.png" class="d-block w-100" alt="spotify">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/Boolflix.png" class="d-block w-100" alt="Boolflix">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/campominato.png" class="d-block w-100" alt="campominato">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
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

    
}
    
</style>