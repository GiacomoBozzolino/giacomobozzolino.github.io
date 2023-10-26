<script>
export default {
    name: 'AppContact',
    
}
</script>

<template lang="">
    <div id="about" class="d-flex justify-content-center align-items-center">
        <div class="container py-5 ">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section">About Me</h2>
                </div>
                <div class="col-12 col-md-6">
                    
                    <p class="py-5">
                        Ciao, sono Giacomo Bozzolino, nato a Genova nel 1989. La mia avventura nel mondo dello sviluppo web è iniziata come una scoperta recente, ma è diventata una passione travolgente che ha cambiato la mia vita. Questa passione ha alimentato la mia sete di conoscenza, spingendomi sempre più a immergermi in questo affascinante universo, fino a prendere la decisione di intraprendere il percorso presso Boolean per diventare un full stack web developer. <br>

                        Sono guidato da una profonda passione per l'apprendimento costante, sempre alla ricerca di nuove sfide e opportunità di crescita professionale. Sono determinato a mettere in pratica le mie esperienze e competenze per contribuire a progetti innovativi, portando creatività e dedizione in ogni sfida che affronto. <br>

                        Al di fuori del mondo del web development, mi piace dedicare il mio tempo libero alla fotografia naturalistica, che unisce la mia creatività al mio amore per la natura, e alla modellazione 3D tramite il software Blender.
                    </p>
                </div>
                <div class="col-12 col-md-6">
                    <div class="text-center py-5">
                        <img src="../assets/foto.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
     
</template>

<style lang="scss" scoped>
   #about{
    background-color: rgb(20, 20, 20);
    color: white;
    padding-top: 50px;
    min-height: 100vh;
        img{
          height: 70%; 
          width: 70%; 
        }
} 
</style>