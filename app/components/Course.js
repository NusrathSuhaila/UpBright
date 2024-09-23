// import Image from "next/image";
import Link from "next/link";
import '../globals.css';
import '../responsive.css';
export default function Course() {
  const courses = [
    {
      title: 'Graphics Design',
      imageUrl: 'https://www.ubcourse.com/images/1.jpg',
      alt: 'Graphics Design',
      link: 'https://www.ubcourse.com/home/construct',
    },
    {
      title: 'Development',
      imageUrl: 'https://www.ubcourse.com/images/2.jpg',
      alt: 'Development',
      link: 'https://www.ubcourse.com/home/construct',
    },
    {
      title: 'Video Editing',
      imageUrl: 'https://www.ubcourse.com/images/7.jpg',
      alt: 'Video Editing',
      link: 'https://www.ubcourse.com/home/construct',
    },
    {
      title: 'Language',
      imageUrl: 'https://www.ubcourse.com/images/8.jpg',
      alt: 'Language',
      link: 'https://www.ubcourse.com/home/construct',
    },
  ];

  return (

    <section className="course-carousel-area">
      <div className="container-lg" >
        <div className="row">
          <div className="content-wrapper">
            {courses.map((course, index) => (
              <div className="news-card" key={index}>
                <Link href={course.link} className="news-card__card-link"></Link  >
                <img src={course.imageUrl} alt={course.alt} className="news-card__image" />
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">{course.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="container top-categories ">
        <h5>Top Categories</h5>
        <ul >
          <li><Link href="">Online Earning</Link  ></li>
          <li><Link href="">Graphics Design</Link  ></li>
          <li><Link href="">Development</Link  ></li>
          <li><Link href="">Marketing</Link  ></li>
          <li><Link href="">IT and Software</Link  ></li>
          <li><Link href="">Business</Link  ></li>
          <li><Link href="">Video Editing</Link  ></li>
          <li><Link href="">Language</Link  ></li>
        </ul>
      </div>
    </section>

  )
}