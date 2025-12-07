import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../data';
import { FiClock, FiCheck } from 'react-icons/fi';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <span className="text-primary-600 dark:text-primary-400 font-bold font-serif">{course.price}</span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>

                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <FiClock className="mr-2" />
                    <span>{course.duration}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                    {course.description}
                </p>

                <div className="space-y-2 mb-8">
                    {course.curriculum.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <FiCheck className="mr-2 text-primary-500 flex-shrink-0" />
                            <span>{item}</span>
                        </div>
                    ))}
                    {course.curriculum.length > 3 && (
                        <div className="text-xs text-primary-500 pl-6">+ {course.curriculum.length - 3} more topics</div>
                    )}
                </div>

                <Link
                    to={`/contact?course=${encodeURIComponent(course.title)}`}
                    className="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-xl font-medium transition-colors hover:bg-primary-600 dark:hover:bg-gray-200"
                >
                    Enroll Now
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
