<template>
<div>
  <el-drawer :visible.sync="showVideo" :with-header="false" label="btt" :show-close="false" :append-to-body="true" size="100%">
    <div class="video_contrl">
      <el-button type="primary" tabindex="0" class="chooseAble">全 屏</el-button>
      <el-button type="primary" tabindex="0" class="chooseAble">返 回</el-button>
    </div>
    <iframe class="bvideo" :src="'//player.bilibili.com/player.html?bvid=' + videInf.bvid + '&high_quality=1&autoPlay=true'" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
  </el-drawer>
</div>
</template>

<script>
import {
  Component,
  Vue
} from 'vue-property-decorator';

import {
  videoControlStore
} from '../store/videoControl';

@Component({
  name: 'videoDrawer',
  components: {}
})
export default class extends Vue {
  @videoControlStore.Getter('getShowVideo') getShowVideo;

  @videoControlStore.Getter('getVideoInf') getVideoInf;

  get showVideo() {
    return this.getShowVideo;
  }

  get videInf() {
    return this.getVideoInf;
  }

  mounted() {}
}
</script>

<style lang="scss">
.bvideo {
  width: 100%;
  height: 90%;
  padding: 10px;
}

.video_contrl {
  width: 100%;
  height: 10%;
  padding: 10px;
}
</style>
