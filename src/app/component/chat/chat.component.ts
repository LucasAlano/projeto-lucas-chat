import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  textoInput: string = '';

  addUserMessage() {
    const section = document.querySelector('section#chat')

    const user = document.createElement('p')
    const message = document.createElement('p')
    
    user.id = 'usuario'
    user.innerHTML = 'Usuario: '

    message.id = 'falausuario'
    message.innerText = this.textoInput

    //Styles usuario
    user.style.fontFamily = 'arial';
    user.style.marginLeft = '5px';
    user.style.fontSize = '12px';
    user.style.marginBottom ='2px';
    user.style.marginRight = '2px';
    user.style.color = '#839cb5';
    user.style.textAlign = 'right'   ;
    
    //Styles Fala usuario
    message.style.marginRight = '5px';
    message.style.fontFamily ='arial';
    message.style.marginLeft ='40%';
    message.style.border ='2px solid #686466';
    message.style.color = '#686466'; 
    message.style.textAlign='left';
    message.style.marginTop ='2px';
    message.style.marginRight ='2px';

    if (this.textoInput == ''){
      window.alert('Por fazer informar algum texto na caixa de texto')
    }else{
      section?.appendChild(user)
      section?.appendChild(message)
    }

    this.textoInput = ''

  }

  addHelperMessage() {
    const section = document.querySelector('section#chat')

    const helper = document.createElement('p')
    const message = document.createElement('p')
    
    helper.id = 'atendente'
    helper.innerHTML = 'Atendente: '


    message.id = 'falaatendente'
    message.innerText = this.textoInput

    //Styles Atendente
    helper.style.fontFamily = 'arial';
    helper.style.marginLeft = '5px';
    helper.style.fontSize = '12px'
    helper.style.marginBottom = '2px'
    helper.style.color = '#839cb5'

    //Styles Fala Atendente
    message.style.marginTop = '2px';
    message.style.fontFamily ='arial';
    message.style.width ='60%';
    message.style.marginLeft = '5px';
    message.style.border = '2px solid #686466';
    message.style.color = '#686466';

    if (this.textoInput == ''){
      window.alert('Por fazer informar algum texto na caixa de texto')
    }else{
      section?.appendChild(helper)
      section?.appendChild(message)
    }

    this.textoInput = ''
  }

}
