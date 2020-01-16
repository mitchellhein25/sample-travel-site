import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

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