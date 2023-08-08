### 常规用法呜呜呜出现

<script lang="ts" setup>
const bobo = reactive({
  name:'我是来自bobo的参数'
})

</script>

<FsTestOne :name="bobo.name"></FsTestOne>
