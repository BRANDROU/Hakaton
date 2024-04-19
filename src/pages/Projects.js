import React from 'react';
import Project from '../components/project/Project';
import { projects } from './../helpers/projectsList';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const settings = {
    dots: true, // Показывать точки навигации
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость прокрутки (в миллисекундах)
    slidesToShow: 3, // Количество видимых слайдов
    slidesToScroll: 1, // Количество прокручиваемых слайдов за раз
  };

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Teams</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <Project title={project.title} img={project.img} index={index} />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default Projects;