const text = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.'`

class ReplaceForm {
    constructor(root, careSingleApostrophe) {
        this.root = root
        this.regex = careSingleApostrophe && /\B'/ig || /'/ig
        this.root.innerHTML = `
            <textarea class="input"></textarea>
            <textarea class="output" readonly></textarea>
        `
        this.input = this.root.querySelector('.input')
        this.output = this.root.querySelector('.output')
        this.root.addEventListener('submit', this)
        this.input.addEventListener('input', this)
        this.input.addEventListener('change', this)
    }
    handleEvent() {
        this.replace()
    }
    replace() {
        this.output.value = this.input.value.replace(this.regex, '"')
    }
    get text() {
        return this.output.value
    }
    set text(text) {
        this.input.value = text
        this.handleEvent()
    }
}

let rf1 = new ReplaceForm(document.querySelector('#replace_1'))
rf1.text = text
let rf2 = new ReplaceForm(document.querySelector('#replace_2'), true)
rf2.text = text

class FeedbackForm {
    constructor(root, conf) {
        this.root = root
        this.conf = conf
        this._errors = {}
        this.root.addEventListener('submit', this)
        this.root.addEventListener('input', this)
    }
    validate() {
        this.validateForm()
        return this._errors
    }
    handleEvent(e) {
        if (e.type === 'submit') {
            e.preventDefault()
            this.validateForm()
        } else if (e.type === 'input') {
            this.validateInput(e.target)
        }
    }
    validateForm() {
        this._errors = {}
        for (let input of this.root.elements) {
            this.validateInput(input)
        }
    }
    validateInput(target) {
        const name = target.getAttribute('name')
        const value = target.value
        const {valid, errors} = this.validateValue(value, this.conf[name])
        const errorListNode = target.parentNode.querySelector(':scope > .errors')
        if (errorListNode) errorListNode.innerHTML = errors.map( error => `<li>${ error }</li>` ).join('')
        target.classList.toggle('error', !valid)
        this._errors[name] = errors
        if (!errors.length) delete this._errors[name]
    }
    validateValue(value, rules = []) {
        const errors = []
        let valid = true
        for(let rule of rules) {
            if (!rule.regex.test(value)) {
                errors.push(rule.error)
                valid = false
            }
        }
        return {
            valid,
            errors
        }
    }
}

let ff = new FeedbackForm(document.querySelector('#feedback'), {
    name: [
        { regex: /.{3,}/, error: 'Минимум 3 символа' },
        { regex: /^[^\W\d\s_]+$/i, error: 'Имя должно содержать только буквы' }
    ],
    email: [
        { regex: /^[a-z]+[-\.]?[a-z]+@[a-z]+\.[a-z]{2,}$/i, error: 'E-mail должен иметь вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.' }
    ],
    tel: [
        { regex: /^\+\d{1,3}\(\d{3}\)\d{3}-\d{4}$/, error: 'Телефон должен иметь вид +7(000)000-0000.' }
    ]
})

// console.log( ff.validate() )
