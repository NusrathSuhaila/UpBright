"use client";
import React from "react";
import '../globals.css';
import { CourseSection } from "./CourseSection";
export default function Courses() {
  const coursesArray = [
    {
      id: 12,
      title: "Fiverr",
      description:
        "Fiverr freelancing guide from beginners to advanced & make more profit on Fiverr with skill and non-skill basis ideas.",
      href: "https://www.ubcourse.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_12.jpg",
      url: "https://www.ubcourse.com/home/course/fiverr/12",
      price: { old: "$182", current: 152 },
      rating: 5,
      reviews:  "(37)",
      language: "Tamil",
      level: "beginner",
      lessons: 14,
      duration: "04:26:24 Hours",
      lastUpdated: "Wed, 04-Sep-2024",
      substring: "Fiverr freelancing guide from",
      subtittle:"Fiverr"
    },
    {
      id: 13,
      title: "eBay",
      description:
        "Learn how to sell on eBay in direct & drop shipping, create a side hustle and go on to create a full-time eBay business.",
      href: "https://www.ubcourse.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_13.jpg",
      url: "https://www.ubcourse.com/home/course/ebay/13",
      price: { old: "$182", current: 152 },
      rating: 5,
      reviews:  "(35)",
      language: "Tamil",
      level: "beginner",
      lessons: 12,
      duration: "04:31:52 Hours",
      lastUpdated: "Sat, 07-Sep-2024",
      substring: "Learn how to sell on eBay in dire",
      subtittle:"eBay"
    },
    {
      id: 20,
      title: "Daraz",
      description:
        "Learn how to sell on Daraz, create a side hustle, and expand your sales to Sri Lankan customers.",
      href: "https://www.ubcourse.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_20.jpg",
      url: "https://www.ubcourse.com/home/course/daraz/20",
      price: { old: "$59", current: 29 },
      rating: 5,
      reviews:  "(40)",
      language: "Tamil",
      level: "beginner",
      lessons: 10,
      duration: "03:45:00 Hours",
      lastUpdated: "Mon, 02-Sep-2024",
      substring: "Learn how to sell on Daraz, creat",
      subtittle:"The Complete Daraz Selling Master Class"
    },
    {
      id: 22,
      title: "SproutGigs",
      description:
        "An online marketplace that connects freelancers and business owners around the world with easy-to-do affordable tasks.",
      href: "https://www.ubcourse.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_22.jpg",
      url: "https://www.ubcourse.com/home/course/sproutgigs/22",
      price: { old:"$15", current: 10 },
      rating: 4.9,
      reviews: "(474)",
      language: "Tamil",
      level: "beginner",
      lessons: 8,
      duration: "03:00:12 Hours",
      lastUpdated: "Tue, 10-Sep-2024",
      substring: "An online marketplace that",
      subtittle:"Sprout Gigs offers an opportunity to learn and earn through accessible and cost-effective tasks."
    },
    {
      id: 24,
      title: "Adsense + WordPress",
      description:
        "Learn to monetize your WordPress blog using Google AdSense. Ideal for beginners looking to generate passive income from home.",
      href: "https://www.ubcourse.com/uploads/thumbnails/course_thumbnails/course_thumbnail_default_24.jpg",
      url: "https://www.ubcourse.com/home/construct",
      price: {  current: 0 },
      language: "Tamil",
      level: "beginner",
      lessons: 0,
      duration: "Coming Soon",
      lastUpdated: "Coming Soon",
      substring: "Learn to monetize your",
      subtittle:""
    },
  ];

// Reverse the courses array for the second section
const reversedCourses = [...coursesArray].reverse();


return (
  <>
    {/* Render the original course section with customization on the 5th course */}
    <CourseSection title="Top Courses" courses={coursesArray} customizedIndex={4} />
    
    {/* Render the reversed course section with customization on the 1st course */}
    <CourseSection title="Top 10 Latest Courses" courses={reversedCourses} customizedIndex={0} />
  </>
);
}