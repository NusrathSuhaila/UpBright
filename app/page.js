import './globals.css';
import Whatsapp from './components/Whatsapp';
import Banner from './components/Banner';
import Course from './components/Course';
// import TopCourse from './components/TopCourse';
import Business from './components/Business';
// import CoursePopover from './components/CoursePopover';
import CourseArray from './components/CourseArray';


export default function Home() {
  return (
    <>
      <Banner />
      <CourseArray />
      <Course />
      <Business/>
      <Whatsapp />
      

    </>
  );
}
