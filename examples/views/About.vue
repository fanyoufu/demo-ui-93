<template>
  <div>
    <my-dialog v-model="show"
    title="哈哈哈"
    content="闲茶淡水饭"
    @no="hNo"
    @yes="hYes">
    <div slot="body">
      <p>这里我的是内容</p>
      <p>这里我的是内容</p>
      <p>这里我的是内容</p>
      <p>这里我的是内容</p>
    </div>
    </my-dialog>
    <h1>测试按钮的功能</h1>
    <my-button>来，点赞再走!</my-button>
    <br>
    <my-button @click="hClick"></my-button>
    <br>
    <my-button :size="size">mini大小的按钮</my-button>
    <br>
    <my-button size="huge">huge大小的按钮</my-button>
    <hr>
    <button @click="hChangeSize">改变大小</button>
    <hr>
    <br>
    <my-button  icon="user">icon为user的按钮</my-button>
    <br>
    <my-button  icon="history">icon为history的按钮</my-button>
     <br>
    <my-button  icon="history" :disabled="mDisabled">icon为history的按钮</my-button>
    <br>
    <my-button  icon="history" :disabled="false">icon为history的没有禁用按钮</my-button>
    <br>
    <my-button  icon="history" disabled>icon为history的禁用按钮</my-button>
    <br>
    <my-button  icon="history" :loading="false">icon为history的loading按钮</my-button>
     <br>
    <hr>
    <my-button  icon="history" :loading="true">icon为history的loading按钮</my-button>
     <br>
    <my-button animated icon="history" :loading="false">
      <div slot="hidden">$10000</div>
      <div slot="visible"><i class="shop icon"></i>不要错过哈</div>
    </my-button>

    <my-button animated="fade" icon="history" :loading="false">
      <div slot="hidden">$10000</div>
      <div slot="visible"><i class="shop icon"></i>不要错过哈</div>
    </my-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      size: 'mini',
      mDisabled: false,
      show: true
    }
  },
  methods: {
    hClick () {
      window.alert(1)
    },
    hChangeSize () {
      this.size = 'huge'
      this.mDisabled = !this.mDisabled
    }
  }
}
</script>
