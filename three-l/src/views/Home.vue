<template>
  <div id="WebGL-output">
    <earth />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import earth from '../components/earth.vue';

@Component({
  name: 'Home',
 components: {
   earth
 }
})
export default class extends Vue {
}
</script>

<style lang="scss">

</style>