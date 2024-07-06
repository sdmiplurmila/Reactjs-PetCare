import React, { useEffect, useRef } from 'react';

const Counter = ({ count, label }) => {
  const counterRef = useRef();

  useEffect(() => {
    const counter = counterRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let startValue = 0;
            const endValue = parseInt(counter.getAttribute('data-end-value'), 10);
            const increment = endValue / 200;

            const updateCounter = setInterval(() => {
              startValue += increment;
              counter.textContent = Math.min(startValue.toFixed(0), endValue);
              if (startValue >= endValue) {
                clearInterval(updateCounter);
                observer.unobserve(counter);
              }
            }, 10);
          }
        });
      },
      { threshold: 1 }
    );

    if (counter) {
      observer.observe(counter);
    }

    return () => {
      if (counter) {
        observer.unobserve(counter);
      }
    };
  }, []);

  return (
    <div className="col-lg-3 col-md-6 col-6 mb-3">
      <div className="counter_text">
        <h1 ref={counterRef} className="counter" data-end-value={count}>0</h1>
        <p>{label}</p>
      </div>
    </div>
  );
};

const PetCounters = () => (
  <section className="counter_section_main_wrapper">
    <div className="container">
      <div className="row">
        <Counter count={50} label="Customer" />
        <Counter count={8500} label="Professionals" />
        <Counter count={20} label="Products" />
        <Counter count={50} label="Pets Hosted" />
      </div>
    </div>
  </section>
);

export default PetCounters;
