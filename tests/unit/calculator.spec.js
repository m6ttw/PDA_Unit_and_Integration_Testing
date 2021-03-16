import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it("can add numbers", () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add("1");
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it("can subtract numbers", () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract("4");
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it("can multiply numbers", () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply("5");
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it("can subtract numbers", () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide("7");
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it("can concatenate multiple number button clicks", () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick("1");
    wrapper.vm.numberClick("1");
    wrapper.vm.numberClick("1");
    expect(wrapper.vm.runningTotal).to.equal(111)
  })

  it("can chain multiple operations together", () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick("4");
    wrapper.vm.operatorClick("*");
    wrapper.vm.numberClick("3");
    wrapper.vm.operatorClick("/");
    wrapper.vm.numberClick("2");
    wrapper.vm.operatorClick("*");
    wrapper.vm.numberClick("5");
    wrapper.vm.operatorClick("=");
    expect(wrapper.vm.runningTotal).to.equal(30)
  })

  it("can clear the running total without affecting the calculation", () => {
    const wrapper = shallowMount(App);
    wrapper.vm.numberClick("1");
    wrapper.vm.operatorClick("+");
    wrapper.vm.numberClick("2");
    wrapper.vm.operatorClick("+");
    wrapper.vm.numberClick("3");
    wrapper.vm.operatorClick("+");
    wrapper.vm.numberClick("9");
    wrapper.vm.clearClick();
    wrapper.vm.operatorClick("=");
    expect(wrapper.vm.runningTotal).to.equal(6)
  })
})
