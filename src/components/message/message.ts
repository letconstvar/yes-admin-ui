import { h, VNode, render } from 'vue';
import messageComponent from './message.vue';

interface messageOptions {
  top?: number,
  message: string,
  duration?: number,
  type?: string,       // primary info success warning danger simple
  icon?: string
}

let id:number = 1;
let messageList: Array<number> = [];
const config: messageOptions = {
  top: 0,
  message: '',
  duration: 3,
  type: 'simple'
};

const Message = (params: messageOptions) => {
  // messageList
  messageList.push(id++);

  // create container
  let messageContainer: HTMLDivElement = document.createElement('div');
  messageContainer.setAttribute('id', `${id}`);
  messageContainer.setAttribute('style', 'display:flex; align-items:center; justify-content:center;');

  // options
  let top: string = messageList.length === 1 ? '20px' : `${(messageList.length-1)*60 + messageList.length*20}px`;
  let options: messageOptions = Object.assign({}, config, params, {
      parentId: id,
      top: top,
      onClose: () => {
        render(null, messageContainer)
        messageList.pop();
        messageContainer.remove();
      }
  });

  // message VNode
  const vm: VNode = h(messageComponent as any, options);

  // render message
  render(vm, messageContainer);

  // append to body
  document.body.appendChild(messageContainer)
}

export default Message;