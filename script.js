const secondHand = document.querySelector('.second-hand');

const minsHand = document.querySelector('.min-hand');

const hourHand = document.querySelector('.hour-hand');


        function setDate() {
            // the new keyword is used to create an instance of an object that is defined by a constructor function.
            const now = new Date();
            const seconds = now.getSeconds();
            const secondDegree = ((seconds/60)*360) + 90;
            secondHand.style.transform = `rotate(${secondDegree}deg)`;

            const mins = now.getMinutes();
            const minsDegrees = ((mins / 60 )*360)+90;
            minsHand.style.transform = `rotate(${minsDegrees}deg)`;

            const hour = now.getHours();
            const hourDegrees = ((mins/12) * 360)+90;
            hourHand.style.transform = `rotate(${hourDegrees}deg)`;

            
        }

        setInterval(setDate, 1000);

// Element.addevenlistener("click", myFunction);