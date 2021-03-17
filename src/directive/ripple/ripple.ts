/**
 * interface
 */
interface waveDirectiveOptions {
  color: string;
  initOpacity?: number;
  duration: number;
  easing: string;
}

interface directiveBindingOptions {
  instance: any,
  value: any,
  oldValue?: any,
  arg?: string,
  modifiers?: object,
  dir?: any
}

interface relativePointer {
  x: number,
  y: number
}


/**
 * 创建一个父容器
 */
const createContainer = ({
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius
}: CSSStyleDeclaration): HTMLElement => {
  const waveContainer = document.createElement('div');

  waveContainer.style.position = 'absolute';
  waveContainer.style.top = '0px';
  waveContainer.style.left = '0px';
  waveContainer.style.width = '100%';
  waveContainer.style.height = '100%';
  waveContainer.style.overflow = 'hidden';
  waveContainer.style.pointerEvents = 'none';
  waveContainer.style.borderRadius = `${borderTopLeftRadius} ${borderTopRightRadius} ${borderBottomLeftRadius} ${borderBottomRightRadius}`;
  waveContainer.id = `wave-container-${new Date().getTime()}`;

  return waveContainer;
}


/**
 * 创建水波纹容器
 */
const createWaveElement = (
  x: number,
  y: number, 
  size: number, 
  options: waveDirectiveOptions
): HTMLElement => {
  const waveElement = document.createElement('div');

  waveElement.style.position = 'absolute';
  waveElement.style.width = `${size}px`;
  waveElement.style.height = `${size}px`;
  waveElement.style.top = `${y}px`;
  waveElement.style.left = `${x}px`;
  waveElement.style.zIndex = '9999';
  waveElement.style.background = options.color;
  waveElement.style.borderRadius = '50%';
  waveElement.style.transform = `translate(-50%, -50%) scale(0)`;
  waveElement.style.transition = `transform ${options.duration}s ${options.easing}`;

  return waveElement;
}


/**
 * 获取容器的绝对定位
 */
const getRelativePointer = ({x, y}: PointerEvent, {top, left}: DOMRect): relativePointer => {
  return {
    x: x - left,
    y: y - top,
  }
}


/**
 * 计算鼠标点击位置到父容器边角的距离
 */
const magnitude = (x1: number, y1: number, x2: number, y2: number): number => {
  const deltaX = x1 - x2;
  const deltaY = y1 - y2;

  return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
}


/**
 * 获取最长距离
 */
const getDistanceToFurthestCorner = (x: number, y: number, { width, height }: DOMRect): number => {
  const topLeft = magnitude(x, y, 0, 0);
  const topRight = magnitude(x, y, width, 0);
  const bottomLeft = magnitude(x, y, 0, height);
  const bottomRight = magnitude(x, y, width, height);

  return Math.max(topLeft, topRight, bottomLeft, bottomRight);
}


/**
 * 统计水波纹元素
 */
let waveElementArr: Array<string> = [];


/**
 * 删除水波纹元素
 */
 const deleteWaveElement = () => {
  document.getElementById(waveElementArr[0])?.remove();
  waveElementArr.shift();
}


/**
 * 配置项
 */
const waveColor = (options: any) => {
  if (options.value === undefined || options.value.color === undefined) {
    return 'rgba(0, 0, 0, 0.15)'
  }
  return options.value.color
}
const waveDuration = (options: any): number => {
  if (options.value === undefined || options.value.duration === undefined) {
    return 0.5
  }
  return options.value.duration
}
const waveEasing = (options: any): string => {
  if (options.value === undefined || options.value.easing === undefined) {
    return 'ease-out'
  }
  return options.value.easing
}


/**
 * 水波纹指令
 */
const waveRipple: object = {
  beforeMount(el: HTMLElement, binding: directiveBindingOptions) {
    el.addEventListener('click', (event: any): void => {
      // 水波纹配置
      const options: waveDirectiveOptions = {
        // color: binding.value === undefined ? 'rgba(0, 0, 0, 0.15);' : binding.value.color,
        color: waveColor(binding),
        initOpacity: 0,
        duration: waveDuration(binding),
        easing: waveEasing(binding)
      };
      const rect: DOMRect = el.getBoundingClientRect();
      const {x, y} = getRelativePointer(event, rect);
      const size: number = 2.05 * getDistanceToFurthestCorner(x, y, rect);

      // 获取被挂载元素的所有样式
      const computedStyles = window.getComputedStyle(el, null);

      // 创建一个 waveContainer 容器，并且把挂载 border 的样式赋值给 waveContainer
      const waveContainer = createContainer(computedStyles);

      // 创建一个wave元素
      const waveElement = createWaveElement(x, y, size, options);

      // 判断被挂载元素的定位是否为 static
      let originalPositionValue: string = '';
      if (computedStyles.position === 'static') {
        if (el.style.position) {
          originalPositionValue = el.style.position;
        }
        el.style.position = 'relative';
      }

      // 添加水波纹元素
      waveElementArr.push(waveContainer.id);
      if (waveElementArr.length <= 1) {
        waveContainer.appendChild(waveElement);
        el.appendChild(waveContainer);
      } else {
        deleteWaveElement();
        waveContainer.appendChild(waveElement);
        el.appendChild(waveContainer);
      }

      // 触发动画
      setTimeout(() => {
        waveElement.style.transform = `translate(-50%,-50%) scale(1)`;
      }, 0)

      // 移除DOM
      waveElement.addEventListener('transitionend', () => {
        waveContainer.remove();
        el.style.position = originalPositionValue;
      }, false)

    })
  }
}

export default waveRipple;