const secondHand = document.querySelector('#sec-hand');

const minsHand = document.querySelector('#min-hand');

const hourHand = document.querySelector('#hour-hand');


        function setDate() {
            // the new keyword is used to create an instance of an object that is defined by a constructor function.
            const now = new Date();
            const seconds = now.getSeconds();
            const secondDegree = seconds*6;
            secondHand.style.transform = `rotate(${secondDegree}deg)`;

            const mins = now.getMinutes();
            const minsDegrees = mins*6;
                // ${minsDegrees} is a placeholder where the value of the variable minsDegrees will be inserted into the string
            minsHand.style.transform = `rotate(${minsDegrees}deg)`;

            const hour = now.getHours();
            const hourDegrees = hour*30 + mins/2;
            hourHand.style.transform = `rotate(${hourDegrees}deg)`;

            
        }
        //setDate function is called every 1second
        setInterval(setDate, 1000);

// Element.addevenlistener("click", myFunction);
