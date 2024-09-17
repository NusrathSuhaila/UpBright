"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import $ from 'jquery';

export default function Category() {
    const [isVisible, setIsVisible] = useState(false);
    

    // Handle Scroll Functionality
    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setIsVisible(true);
            
        } else {
            setIsVisible(false);
         
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // jQuery functionality for toggling subcategories and courses
        $(document).ready(function () {
            $('.category-link').click(function (event) {
                event.preventDefault();
                $(this).next('.subcategories').slideToggle();
            });
            $('.subcategory-link').click(function (event) {
                event.preventDefault();
                $(this).next('.courses').slideToggle();
            });
        });

        // Cleanup function to remove the scroll listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const categories = [
        {
            categoryName: "Web Gains",
            subcategories: [
                {
                    id: 19,
                    name: "Freelancing",
                    courses: [
                        { name: "Fiverr", url: "https://www.ubcourse.com/home/course/fiverr/12" },
                        { name: "SproutGigs", url: "https://www.ubcourse.com/home/course/sproutgigs/22" },
                        {
                            name: "Adsense + WordPress",
                            url: "https://www.ubcourse.com/home/course/adsense-wordpress/24",
                            comingSoon: true,
                        },
                    ],
                },
                {
                    id: 20,
                    name: "Ecommerce",
                    courses: [
                        { name: "eBay", url: "https://www.ubcourse.com/home/course/ebay/13" },
                        { name: "Daraz", url: "https://www.ubcourse.com/home/course/daraz/20" },
                    ],
                },
            ],
        },
        {
            categoryName: "Graphics Design",
            subcategories: [
                { id: 28, name: "Digital Design", courses: [] },
                { id: 29, name: "Web Design", courses: [] },
            ],
        },
        {
            categoryName: "Development",
            subcategories: [
                { id: 35, name: "Web Development", courses: [] },
            ],
        },
    ];

    const styles = {
        categoryItem: {
            color: "#74767e !important ",
            fontSize: "16px !important",
            fontFamily: "Macan,Helvetica Neue,Helvetica,Arial,sans-serif",
            listStyle: "none",
        },
        subcategories: {
            listStyle: "none",
        },
        subcategoryItem: {
            listStyle: "none",
        },
        subcategoryLink: {
            fontWeight: "600",
            color: "#000",
            fontSize: "16px",
            fontFamily: "Macan,Helvetica Neue,Helvetica,Arial,sans-serif",
        },
        subSubcategories: {
            paddingLeft: "initial",
            marginBottom: 0,
            paddingBottom: 0,
            listStyle: "none",
        },
        courseItem: {
            paddingLeft: "initial",
            marginBottom: 0,
            paddingBottom: 0,
            listStyle: "none",
        },
        courseText: {
            color: "#74767e",
            fontSize: "16px",
            fontFamily: "Macan,Helvetica Neue,Helvetica,Arial,sans-serif",
        },
        courseLink: {
            color: "#74767e",
            fontSize: "16px",
            fontFamily: "Macan,Helvetica Neue,Helvetica,Arial,sans-serif",
        },
        comingSoonBadge: {
            color: "red",
            fontSize: "10px",
        },
        ul: {
            display: "flex !important",
            justifyContent: "center",
            padding: "10px 0",
            alignItems: "center",
            gap: "50px",
            listStyle: "none",
        },
    };

    const courses = [
        { name: "Web Gains", link: "#" },
        { name: "Graphics Design", link: "#" },
        { name: "Development", link: "#" },
        { name: "Video Editing", link: "#" },
        { name: "Language", link: "#" },
    ];
    return (
        <>
        <div className="category-section">
            <div className="fix-width container-xl">
                <ul className="ul3 ml-0" style={styles.ul}>
                    {categories.map((category) => (
                        <li className="category-item" style={styles.categoryItem}>
                            <Link href="#" id="">
                                {category.categoryName}
                            </Link >
                            {/* Subcategory List */}
                            {category.subcategories.length > 0 && (
                                <ul className="subcategories" style={styles.subcategories}>
                                    {category.subcategories.map((subcategory, index) => (
                                        <li key={index} style={styles.subcategoryItem}>
                                            <Link
                                                href="#"
                                                className="subcategory-link"
                                                data-subcategory-id={subcategory.id}
                                                style={styles.subcategoryLink}
                                            >
                                                {subcategory.name}
                                            </Link >
                                            {/* Sub-Subcategory List */}
                                            <ul style={styles.subSubcategories}>
                                                {subcategory.courses.map((course, i) => (
                                                    <li key={i} style={styles.courseItem}>
                                                        <span style={styles.courseText}>
                                                            <Link href={course.url} style={styles.courseLink}>
                                                                {course.name}
                                                            </Link >
                                                            {course.comingSoon && (
                                                                <span style={styles.comingSoonBadge}>coming soon</span>
                                                            )}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="category-section">
        <div className="fix-width container-xl">
          <ul
            className="ul3 ml-0"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 0",
              alignItems: "center",
              gap: "50px",
              listStyle: "none",
            }}
          >
            {courses.map((course, index) => (
              <li key={index} className="category-item" style={{ color: "#74767e", fontSize: "16px", fontFamily: "Macan, Helvetica Neue, Helvetica, Arial, sans-serif" }}>
                <Link href={course.link} id="">{course.name}</Link >
              </li>
            ))}
          </ul>
        </div>
      </div>
      </>
    )
}