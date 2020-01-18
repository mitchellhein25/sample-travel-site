import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

new ClientArea();
new StickyHeader();
new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let modal

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault() 
       if (typeof modal == "undefined") {
        import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
            modal = new x.default() 
            setTimeout(() => modal.openTheModal(), 20)
        }).catch(() => console.log("There was a problem"))
       } else {
        modal.openTheModal()
       }
    })
})

if (module.hot) {
    module.hot.accept()
}

/*Lesson example code below this line */

/*class Adult extends Person { inherits everything from Person class
    payTaxes() {
        console.log(this.name + " now owes zero taxes.");
    }
}

let john = new Person("John Doe", "purple");
john.greet();

let jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();*/