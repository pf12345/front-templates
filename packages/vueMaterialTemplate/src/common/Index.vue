<template>
  <div class="uploader">
    <div class="uploader-button">
      <Button type="primary">点击上传图片</Button>
    </div>
  </div>
</template>

<script>
import { Button } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export default {
  name: "test",
  props: {},
  data() {
    return {
      imageUrl: "",
      dialogVisible: false
    };
  },
  components: {
    Button,
  },
  created() {
    console.log('created')
  },
  methods: {

  },
};
</script>
