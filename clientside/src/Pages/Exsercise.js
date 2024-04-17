import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exercise = ({ heading, description, imageUrl }) => (
  <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h1 className="text-white text-3xl font-medium mb-4">{heading}</h1>
          <p className="leading-relaxed mb-4">{description}</p>
        </div>
        <img alt="exercise" className="lg:w-1/2 w-full lg:h-auto rounded-l-[30px] h-64 object-cover object-center rounded" src={imageUrl} />
      </div>
    </div>
  </section>
);

const Exsercise = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('http://localhost:5000/exercises');
        setExercises(response.data); // Assuming the response data is an array of exercises
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div>
      {exercises.map((exercise, index) => (
        <Exercise
          key={index}
          heading={exercise.heading} // Assuming the heading field corresponds to the title in Exercise component
          description={exercise.description}
          imageUrl={exercise.image} // Assuming the image field corresponds to the imageUrl in Exercise component
        />
      ))}

      <Exercise
        title="Push-Up"
        description="Start in a plank position with your hands slightly wider than shoulder-width apart. Lower your body towards the ground by bending your elbows. Keep your body in a straight line from head to heels. Push back up to the starting position."
        imageUrl="https://pixel.nymag.com/imgs/fashion/daily/2015/05/13/stronger-fitness-gifs-2/fitness-gifs-UA-03.w710.h473.gif"
      />

      <Exercise
        title="Tricep Dips"
        description="Position your hands on parallel bars or the edge of a sturdy surface with your arms fully extended. Lower your body by bending your elbows until your upper arms are parallel to the ground. Push back up to the starting position."
        imageUrl="https://www.bing.com/th/id/OGC.f4c644b54b7707ea2cddfc972384e67d?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fcf%2fe4%2f07%2fcfe40769ef2846ed070875ad27c6428c.gif&ehk=QO%2bVKronZTX26N4HOMhSgxEbXN4c6d1Ygnqaams%2bYq0%3d"
      />

      <Exercise
        title="Bent-Over Rows"
        description="Hold a barbell or dumbbells with an overhand grip, hinge at your hips to bend forward, keeping your back flat. Pull the weight(s) towards your lower ribcage by squeezing your shoulder blades together. Lower the weight(s) back down in a controlled manner."
        imageUrl="https://www.bing.com/th/id/OGC.0787733c153a12b210a43266cf6dcd23?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f47%2f89%2faf%2f4789af1a66d83392bdc3921d3288f5c6.gif&ehk=X%2fQAtQpO3Vbgmxh8AaEpgmyIztyjCx%2bvBe9NCZEk7G0%3d"
      />

      <Exercise
        title="Overhead Shoulder Press"
        description="Sit or stand with a dumbbell in each hand at shoulder height. Press the weights overhead, fully extending your arms. Lower the dumbbells back to shoulder height with control. Ensure proper posture and avoid arching your back excessively."
        imageUrl="https://www.bing.com/th/id/OGC.e6cfb35323033fd02274298c862e43cb?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fff%2fa9%2f75%2fffa975c9edca753296cc203dc231aa1a.gif&ehk=cEIdXhb%2fTwZIf%2bHXFL9kXVOEoyUZ0FjC2NTBFt30hKk%3d"
      />
    </div>
  );
};

export default Exsercise;
