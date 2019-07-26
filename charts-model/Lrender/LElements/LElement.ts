import { merge } from '../util/index'
export interface LElementShape {
}

type Color = string | CanvasGradient | CanvasPattern
export interface LElementStyle {
  fill?: Color
  stroke?: Color
}

export interface XElementOptions {
  type?: string
  shape?: LElementShape
  style?: LElementStyle
}

class LElement {
  name = 'Lyelement'
  shape: LElementShape = {}

  options: {}
  constructor (opt: any) {
    this.options = opt
  }
  /**
   * 这一步不在构造函数内进行是因为放在构造函数内的话，会被子类的默认属性声明重写
   */
  updateOptions () {
    let opt = this.options
  }
  /**
   * 绘制
   */
  render (ctx: CanvasRenderingContext2D) {
  }
  /**
   * 绘制之前进行样式的处理
   */
  beforeRender (ctx: CanvasRenderingContext2D) {
  }
  /**
   * 绘制之后进行还原
   */
  afterRender (ctx: CanvasRenderingContext2D) {
  }
  /**
   * 刷新，这个方法由外部调用
   */
  refresh (ctx: CanvasRenderingContext2D) {
    console.log("刷新")
  }
}

export default LElement
