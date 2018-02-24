<template>
	<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in gallery" v-if="gallery.length">
            	<img :src="item.img_url" width="100%" alt="" />
            </div>
          
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
	import "../assets/swiper/swiper.min.css"
	import "../assets/swiper/swiper.min.js"
	export default{
		props:["gallery"],
		mounted(){
			setTimeout(()=>{
				this.initSwiper();
			},20)
		},
		methods:{
			initSwiper(){
	    		this.swiper = new Swiper('.swiper-container', {
			        pagination: '.swiper-pagination',
			        paginationClickable: true,
			        nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
			        spaceBetween: 0,
			        loop:true,
			        loopedSlides:this.gallery.length,
	    		});
    		}
		}
	}
</script>

<style>
	.swiper-container {
        width: 100%;
        min-height: 260px;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>