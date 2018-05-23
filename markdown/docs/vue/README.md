<template>
  	<div class="test-demo">
	    <my-hello></my-hello>
	    <el-button>button</el-button>
  	</div>
</template>

<script>
import myHello from '../.vuepress/components/hello.vue';
console.log(myHello);
export default {
	data() {
		return {
			msg: 'Hello VuePress!'
		}
	},
	components: {
		'my-hello': myHello
	}
}
</script>