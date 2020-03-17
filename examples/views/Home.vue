<template>
  <div class="home">
    <my-headline icon="user">东陌上
      <div slot='sub'>杜甫</div>
    </my-headline>
    <my-divider>-</my-divider>
    <div>
      白玉谁家郎，驱车渡天津；看花东陌上，惊动洛阳人。
    </div>
    <my-divider icon="user">用户管理</my-divider>
    <img alt="Vue logo" src="../assets/logo.png">
    <my-slider style="width:400px;height:500px;"
    :list="list"
    :auto="4000"
    :curIdx="curIdx"
    @click="hSlider">
    </my-slider>
    <hr>

    <my-slider style="width:200px;height:360px;"
    :list="list"
    :auto="4000"
    :curIdx="curIdx"
    @slider="hSlider">
    </my-slider>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      curIdx: 0,
      list: [{ url: require('../assets/img/1.The Shawshank Redemption.jpg'), alt: '1.肖申克的救赎' },
        { url: require('../assets/img/2.Forrest Gump.jpg'), alt: '2.阿甘正传' },
        { url: require('../assets/img/3.The Pursuit of Happyness.jpg'), alt: '3.幸福来敲门' },
        { url: require('../assets/img/4.这个杀手不太冷.jpg'), alt: '4.这个杀手不太冷' },
        { url: require('../assets/img/5.WALL_E.jpg'), alt: '5.机器人总动员' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584438531340&di=0c69fbc0d55171aa8a1d2d107c3f7c87&imgtype=0&src=http%3A%2F%2Fimg21.mtime.cn%2Fpi%2F2011%2F01%2F12%2F134106.88324738_1000X1000.jpg', alt: '5.机器人总动员' }]
    }
  },
  methods: {
    hSlider (e) {
      console.log(e)
    }
  }
}
</script>
