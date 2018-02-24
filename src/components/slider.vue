<template>
	<div class="sliders" >
		<div class="slider"  @mouseover="stop" @mouseout="auto">
			<a href="">
			<transition name="new">
				
					<img :src="gallery[current].img_url" alt="" v-if="flag" />
				
			</transition>
			</a>
			<a href="">
			<transition name="old">
				
					<img :src="gallery[current].img_url" alt="" v-if="!flag" />
				
			</transition>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				current:0,
				flag:true,
				interId:0
			}
		},
		props:["gallery"],
		methods:{
			goSlider(num){
				this.flag = false;
				setTimeout(()=>{
					this.current = num;
					this.flag = true;
				},10)
				
			},
			auto(){
				this.interId = setInterval(()=>{
					this.goSlider(this.nextIndex)
				},2000)
			},
			stop(){
				console.log("stop");
				clearInterval(this.interId);
			}
		},
		computed:{
			nextIndex(){
				if(this.current<this.gallery.length-1){
					return this.current+1;
				} else {
					return 0;
				}
			}
		},
		mounted(){
			this.auto();
		}
	}
</script>

<style>
	.slider img{
		width: 100%;
	}
	.slider a{
		display: block;
	}
	.sliders{
		position: relative;
		width: 100%;
		min-height: 280px;
	}
	.slider a{
		position: absolute;
		left: 0;
		top: 0;
	}
	@keyframes slideIn{
		from{transform: translate(100%,0);}
		to{transform: translate(0,0);}
	}
	.new-enter-active{
		animation: slideIn ease 0.7s;
	}
	@keyframes slideOut{
		from{transform: translate(0,0);}
		to{transform: translate(-100%,0);}
	}
	.old-leave-active{
		animation: slideOut ease 0.7s;
	}
</style>