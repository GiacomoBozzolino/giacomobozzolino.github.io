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
                        <h2 class="section">My Project</h2>
                        <div>
                            Qui puoi vedere alcuni dei miei progetti!
                        </div>
                    </div>    
                </div>
                <div class="col-12">
                    <div id="carouselExampleAutoplaying" class="carousel slide pointer-event" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <img src="https://cdn.mos.cms.futurecdn.net/36EFXMS9FEXVykNP8cFix7-1200-80.jpg" class="d-block w-100" alt="...">                        </div>
                            <div class="carousel-item active">
                                <img src="https://cdn.vox-cdn.com/thumbor/Fj_rlZJVl0bP5wUuAb-gEM-G2To=/0x0:825x1196/1200x675/filters:focal(293x643:425x775)/cdn.vox-cdn.com/uploads/chorus_image/image/69018543/Alien_Vol_1_1_Virgin_Variant.0.jpeg" class="d-block w-100" alt="...">                          </div>
                            <div class="carousel-item">
                                <img src="https://media.wired.co.uk/photos/606db4e0d051e15de128ca53/master/w_1600%2Cc_limit/alien_1.jpg" class="d-block w-100" alt="...">                          </div>
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
    padding-top: 50px;
    min-height: 100vh;
    // h2{
    //     text-transform: uppercase;
    //     font-size: 150px;
    //     text-shadow: 6px 0px 1px #4c4c4c;
    // }
}
    
</style>