<template>
	<div class="sliders" v-if="gallery.length">
		<a href="" class="slider"  >
			<transition name="new" >			
			<img width="100%" v-if="flag"  :src="gallery[current].img_url" alt="" />
			</transition>
			<transition name="old" >			
			<img width="100%" v-if="!flag"  :src="gallery[current].img_url" alt="" />
			</transition>
			
		</a>
	</div>
</template>
<script>
	export default {
		props:["gallery"],
		data(){return{
			current:0,
			flag:true
		}},
		methods:{
			auto(){
				setInterval(()=>{
					this.goto(this.nextIndex);
				},2000)
			},
			goto(index){
				this.flag=false;
				setTimeout(()=>{
					this.current=index;
					this.flag=true;
				},10)
			
			}
		},
		computed:{
			nextIndex(){
				if(this.current<this.gallery.length-1){
					return this.current+1
				}else{
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
.sliders{
	width: 100%;
	min-height: 320px;
	overflow: hidden;
	position: relative;
}
.slider{
	width: 100%;
	
	display: block;
	
}
.slider img{
	position: absolute;
	left: 0;
	top:0;
}
@keyframes slideIn{
	from{transform: translate(100%,0);}
	to{transform: translate(0,0);}
}
@keyframes slideOut{
	from{transform: translate(0%,0);}
	to{transform: translate(-100%,0);}
}
.new-enter-active{
	animation: slideIn ease 1s;
}
.old-leave-to{
	animation: slideOut ease 1s;
}
</style>