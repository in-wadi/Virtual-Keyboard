const buttons = {
  row1: [{
    keyCode: '192', name: 'Tilde', simbols: ['ё', 'Ё', '`', '~'], class: 'key',
  },
  {
    keyCode: '49', name: 'Digit1', simbols: ['1', '!', '1', '!'], class: 'key',
  },
  {
    keyCode: '50', name: 'Digit2', simbols: ['2', '"', '2', '@'], class: 'key',
  },
  {
    keyCode: '51', name: 'Digit3', simbols: ['3', '№', '3', '#'], class: 'key',
  },
  {
    keyCode: '52', name: 'Digit4', simbols: ['4', ';', '4', '$'], class: 'key',
  },
  {
    keyCode: '53', name: 'Digit5', simbols: ['5', '%', '5', '%'], class: 'key',
  },
  {
    keyCode: '54', name: 'Digit6', simbols: ['6', ':', '6', '^'], class: 'key',
  },
  {
    keyCode: '55', name: 'Digit7', simbols: ['7', '?', '7', '&'], class: 'key',
  },
  {
    keyCode: '56', name: 'Digit8', simbols: ['8', '*', '8', '*'], class: 'key',
  },
  {
    keyCode: '57', name: 'Digit9', simbols: ['9', '(', '9', '('], class: 'key',
  },
  {
    keyCode: '48', name: 'Digit0', simbols: ['0', ')', '0', ')'], class: 'key',
  },
  {
    keyCode: '189', name: 'Underscore', simbols: ['-', '_', '-', '_'], class: 'key',
  },
  {
    keyCode: '187', name: 'Plus', simbols: ['=', '+', '=', '+'], class: 'key',
  },
  {
    keyCode: '8', name: 'Backspace', simbols: ['Backspace', 'Backspace', 'Backspace', 'Backspace'], class: 'key backspace',
  },
  ],
  row2: [{
    keyCode: '9', name: 'Tab', simbols: ['Tab', 'Tab', 'Tab', 'Tab'], class: 'key tab',
  },
  {
    keyCode: '81', name: 'KeyQ', simbols: ['й', 'Й', 'q', 'Q'], class: 'key',
  },
  {
    keyCode: '87', name: 'KeyW', simbols: ['ц', 'Ц', 'w', 'W'], class: 'key',
  },
  {
    keyCode: '69', name: 'KeyE', simbols: ['у', 'У', 'e', 'E'], class: 'key',
  },
  {
    keyCode: '82', name: 'KeyR', simbols: ['к', 'К', 'r', 'R'], class: 'key',
  },
  {
    keyCode: '84', name: 'KeyT', simbols: ['е', 'Е', 't', 'T'], class: 'key',
  },
  {
    keyCode: '89', name: 'KeyY', simbols: ['н', 'Н', 'y', 'Y'], class: 'key',
  },
  {
    keyCode: '85', name: 'KeyU', simbols: ['г', 'Г', 'u', 'U'], class: 'key',
  },
  {
    keyCode: '73', name: 'KeyI', simbols: ['ш', 'Ш', 'i', 'I'], class: 'key',
  },
  {
    keyCode: '79', name: 'KeyO', simbols: ['щ', 'Щ', 'o', 'O'], class: 'key',
  },
  {
    keyCode: '80', name: 'KeyP', simbols: ['з', 'З', 'p', 'P'], class: 'key',
  },
  {
    keyCode: '219', name: 'SquigglyBracketsLeft', simbols: ['х', 'Х', '[', '{'], class: 'key',
  },
  {
    keyCode: '221', name: 'SquigglyBracketsRight', simbols: ['ъ', 'Ъ', ']', '}'], class: 'key',
  },
  {
    keyCode: '220', name: 'VerticalBar', simbols: ['\\', '/', '\\', '|'], class: 'key',
  },
  {
    keyCode: '46', name: 'Delete', simbols: ['Del', 'Del', 'Del', 'Del'], class: 'key del',
  },
  ],
  row3: [{
    keyCode: '20', name: 'CapsLock', simbols: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], class: 'key capslock',
  },
  {
    keyCode: '65', name: 'KeyA', simbols: ['ф', 'Ф', 'a', 'A'], class: 'key',
  },
  {
    keyCode: '83', name: 'KeyS', simbols: ['ы', 'Ы', 's', 'S'], class: 'key',
  },
  {
    keyCode: '68', name: 'KeyD', simbols: ['в', 'В', 'd', 'D'], class: 'key',
  },
  {
    keyCode: '70', name: 'KeyF', simbols: ['а', 'А', 'f', 'F'], class: 'key',
  },
  {
    keyCode: '71', name: 'KeyG', simbols: ['п', 'П', 'g', 'G'], class: 'key',
  },
  {
    keyCode: '72', name: 'KeyH', simbols: ['р', 'Р', 'h', 'H'], class: 'key',
  },
  {
    keyCode: '74', name: 'KeyJ', simbols: ['о', 'О', 'j', 'J'], class: 'key',
  },
  {
    keyCode: '75', name: 'KeyK', simbols: ['л', 'Л', 'k', 'K'], class: 'key',
  },
  {
    keyCode: '76', name: 'KeyL', simbols: ['д', 'Д', 'l', 'L'], class: 'key',
  },
  {
    keyCode: '186', name: 'Colon', simbols: ['ж', 'Ж', ';', ':'], class: 'key',
  },
  {
    keyCode: '222', name: 'Backslash', simbols: ['э', 'Э', '\'', '\"'], class: 'key',
  },
  {
    keyCode: '13', name: 'Enter', simbols: ['Enter', 'Enter', 'Enter', 'Enter'], class: 'key enter',
  },
  ],
  row4: [{
    keyCode: '16', name: 'ShiftLeft', simbols: ['Shift', 'Shift', 'Shift', 'Shift'], class: 'key shift',
  },
  {
    keyCode: '90', name: 'KeyZ', simbols: ['я', 'Я', 'z', 'Z'], class: 'key',
  },
  {
    keyCode: '88', name: 'KeyX', simbols: ['ч', 'Ч', 'x', 'X'], class: 'key',
  },
  {
    keyCode: '67', name: 'KeyC', simbols: ['с', 'С', 'c', 'C'], class: 'key',
  },
  {
    keyCode: '86', name: 'KeyV', simbols: ['м', 'М', 'v', 'V'], class: 'key',
  },
  {
    keyCode: '66', name: 'KeyB', simbols: ['и', 'И', 'b', 'B'], class: 'key',
  },
  {
    keyCode: '78', name: 'KeyN', simbols: ['т', 'Т', 'n', 'N'], class: 'key',
  },
  {
    keyCode: '77', name: 'KeyM', simbols: ['ь', 'Ь', 'm', 'M'], class: 'key',
  },
  {
    keyCode: '188', name: 'Less', simbols: ['б', 'Б', ',', '<'], class: 'key',
  },
  {
    keyCode: '190', name: 'Greater', simbols: ['ю', 'Ю', '.', '>'], class: 'key',
  },
  {
    keyCode: '191', name: 'QuestionMark', simbols: ['.', ',', '/', '?'], class: 'key',
  },
  {
    keyCode: '38', name: 'ArrowUp', simbols: ['▲', '▲', '▲', '▲'], class: 'key arrow',
  },
  {
    keyCode: '16', name: 'ShiftRight', simbols: ['Shift', 'Shift', 'Shift', 'Shift'], class: 'key shift-right',
  },
  ],
  row5: [{
    keyCode: '17', name: 'ControlLeft', simbols: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], class: 'key ctrl',
  },
  {
    keyCode: '91', name: 'Windows', simbols: ['Win', 'Win', 'Win', 'Win'], class: 'key win',
  },
  {
    keyCode: '18', name: 'AltLeft', simbols: ['Alt', 'Alt', 'Alt', 'Alt'], class: 'key alt',
  },
  {
    keyCode: '32', name: 'Space', simbols: [' ', ' ', ' ', ' '], class: 'key space',
  },
  {
    keyCode: '18', name: 'AltRight', simbols: ['Alt', 'Alt', 'Alt', 'Alt'], class: 'key alt',
  },
  {
    keyCode: '17', name: 'ControlRight', simbols: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], class: 'key ctrl',
  },
  {
    keyCode: '37', name: 'ArrowLeft', simbols: ['◄', '◄', '◄', '◄'], class: 'key arrow',
  },
  {
    keyCode: '40', name: 'ArrowDown', simbols: ['▼', '▼', '▼', '▼'], class: 'key arrow',
  },
  {
    keyCode: '39', name: 'ArrowRight', simbols: ['►', '►', '►', '►'], class: 'key arrow',
  },
  ],
};

function getKeyboard() {
  const lang = localStorage.getItem('lang');
  let on = ' on';
  let off = ' off';
  if (lang == 'ru') {
    on = ' off';
    off = ' on';
  }
  const wrap = document.createElement('div');
  const input = document.createElement('textarea');
  const inner = document.createElement('div');
  wrap.className = 'page';
  document.body.append(wrap);
  input.setAttribute('id', 'output');
  input.setAttribute('cols', 80);
  input.setAttribute('rows', 4);
  wrap.appendChild(input);
  inner.className = 'btn';
  wrap.appendChild(inner);

  for (const line in buttons) {
    const row = document.createElement('div');
    row.className = 'row';
    inner.appendChild(row);

    for (let i = 0; i < buttons[line].length; i++) {
      const container = document.createElement('div');
      container.className = buttons[line][i].class;
      container.innerHTML = `<span class="${buttons[line][i].name}${off}">
<span class="case down">${buttons[line][i].simbols[0]}</span>
<span class="case up">${buttons[line][i].simbols[1]}</span></span>
<span class="${buttons[line][i].name}${on}"><span class="case down">${buttons[line][i].simbols[2]}</span>
<span class="case up">${buttons[line][i].simbols[3]}</span></span>`;
      row.appendChild(container);
    }
  }
}
getKeyboard();
