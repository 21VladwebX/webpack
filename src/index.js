import '@/styles/scss.scss'
import Person from './Person'

const newPers = new Person('John');
const name = newPers.showName();
newPers.changeName("Moto moto");
document.getElementById('person').innerText = newPers.showName();
