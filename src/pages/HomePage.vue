<script>
export default {
    name: "HomePage",
    
}
</script>



<template lang="">
    <div id="home" class="mp-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="m-5 py-5">
                        <h1>Hi I'm <br> Giacomo Bozzolino</h1>
                        <h3>Full Stack Web Developer</h3>
                        <div class="py-5">
                        <a href="#about" class="btn btn-secondary btn-lg">About me</a>
                        </div>
                    </div>
                    
                    
                </div>

            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>

    #home{
        min-height: 100vh;
        background-color: #fff8e9;
        h1{
            font-weight: 700;
            font-size: 60px ;
        }
        h3{
            font-weight: 700;
            font-size: 2.5rem;
        }
        a:hover{
            background-color:  	#831010;
        }
    }
    
@media only screen and (min-width: 992px){
    #home{
        h1{
       
        font-size:7rem;
    }
    }
    

}

</style>