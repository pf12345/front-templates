// 导入 Vue Test Utils 内的 `shallowMount` 和待测试的组件
import { shallowMount } from '@vue/test-utils'
import MyComponent from '../../src/common/index'

// 挂载这个组件
const wrapper = shallowMount(MyComponent)

describe('MyComponent', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof MyComponent.created).toBe('function')
  })

  // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof MyComponent.data).toBe('function')
    const defaultData = MyComponent.data()
    expect(defaultData.dialogVisible).toBe(false)
  })
})