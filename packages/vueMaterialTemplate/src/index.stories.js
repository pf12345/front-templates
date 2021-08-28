import Vue from 'vue';
import Index from './common/index';

export default { title: '组件UI测试' };


// 通过组件单独引用测试
export const IndependentComponent = () => ({
  components: { Index },
  methods: {
    error() {
      console.log('upload error')
    }
  },
  template: '<Index @error="error" action="/product//upload/uploadOss"></Index>'
});