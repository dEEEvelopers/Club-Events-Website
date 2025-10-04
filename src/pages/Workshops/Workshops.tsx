import { useState } from 'react';
import { Search, Calendar, ChevronRight, Filter } from 'lucide-react';
import './Workshops.css';

import streamlitImg from '../../assets/workshops_img/streamlit2024.jpg';
import workatoImg from '../../assets/workshops_img/workato2024.jpg';
import webdevImg from '../../assets/workshops_img/webdevFeb2025.jpg';
import tabImg from '../../assets/workshops_img/tableu2025.jpg';
import embImg from '../../assets/workshops_img/embroidery.jpg';

interface Workshop {
  id: number;
  title: string;
  date: string;
  category: string;
  instructor: string;
  description: string;
  resources: string;
  image: string;
  tags: string[];
}

export default function Workshops() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Workshop data
  const workshopsData: Workshop[] = [
    {
      id: 1,
      title: "Streamlit Basics",
      date: "2024-10-14",
      category: "Past Workshops",
      instructor: "",
      description: "Learn how to build interactive data apps with Streamlit and turn Python scripts into shareable web dashboards.",
      resources: "",
      image: streamlitImg,
      tags: ["Python", "Streamlit", "Data Science", "Beginner"]
    },
    {
      id: 2,
      title: "Workato Workshop",
      date: "2024-10-16",
      category: "Past Workshops",
      instructor: "",
      description: "Automate your workflows and connect your favorite apps with Workato to save time and supercharge productivity.",
      resources: "",
      image: workatoImg,
      tags: ["Automation", "Business Tools", "No-Code"]
    },
    {
      id: 3,
      title: "Web Dev with HTML & CSS",
      date: "2025-02-18",
      category: "Past Workshops",
      instructor: "",
      description: "Build your first websites from scratch by mastering HTML and CSS, and bring your web ideas to life.",
      resources: "",
      image: webdevImg,
      tags: ["HTML", "CSS", "Hands-On", "Beginner"]
    },
    {
      id: 4,
      title: "Tableu Workshop",
      date: "2025-03-18",
      category: "Past Workshops",
      instructor: "",
      description: "Transform your data into interactive dashboards and visual stories with Tableau, making insights easy to understand and share",
      resources: "",
      image: tabImg,
      tags: ["Data Visualization", "Analytics", "Dashboards"]
    },
    {
      id: 5,
      title: "Embroidery Workshop",
      date: "2025-03-20",
      category: "Past Workshops",
      instructor: "",
      description: "Sowing I think. I dont know what this was about. Change later.",
      resources: "",
      image: embImg,
      tags: ["Sowing", "Block-Based Programming", "Beginner"]
    },
    {
      id: 6,
      title: "Git & GitHub",
      date: "2025-09-17",
      category: "Past Workshops",
      instructor: "CJ, Zhi Min, Nicholas, Jia Rui, Finn",
      description: "Take control of your code with Git and GitHub, collaborate effortlessly, and manage projects like a pro.",
      resources: "https://www.canva.com/design/DAGxs9Z5Rog/JUy5zcZ5AQcZt-tl2lCWvQ/edit",
      image: "https://www.gizmochina.com/wp-content/uploads/2024/03/Github.jpg",
      tags: ["Version Control", "Collaboration", "Project Management"]
    },
    {
      id: 7,
      title: "Front End",
      date: "Week 9 TBC",
      category: "Current Workshops",
      instructor: "Eklavya, Bhavya, Shi Ting, Wei Wan, Donavon",
      description: "Build dynamic web apps with JavaScript and React, creating interactive interfaces and real-world projects.",
      resources: "",
      image: "https://i.ytimg.com/vi/ACaT1Gfhe6I/maxresdefault.jpg",
      tags: ["JavaScript", "React.js"]
    },
    {
      id: 8,
      title: "Back End",
      date: "Week 10 TBC",
      category: "Current Workshops",
      instructor: "Nicholas, Zhi Min, Hui Ci, Jia Rui, Donavon, Wei Wan",
      description: "Dive into backend development with Node.js, Express, and MongoDB, and learn to build robust server-side applications.",
      resources: "",
      image: "https://www.shawndsilva.com/public/assets/images/jXAvz9h.png",
      tags: ["Node.js", "Express", "MongoDB"]
    },
    {
      id: 9,
      title: "Leetcoding Lessons",
      date: "Every Thursday | 4:30pm-6:00pm",
      category: "Lesson Series",
      instructor: "Wong Jia Jun",
      description: "Sharpen your problem-solving skills by tackling coding challenges, mastering algorithms, and preparing for technical interviews.",
      resources: "https://github.com/doubleudoublej/leetcode-lessons",
      image: "https://miro.medium.com/1*0HMd3UBqpu478hk_HbhEaA.png",
      tags: ["Exercises", "Coding", "Beginner"]
    },
    {
      id: 10,
      title: "Python for the Web",
      date: "Every Thursday | 4:30pm-6:00pm",
      category: "Lesson Series",
      instructor: "Wong Jia Jun",
      description: "An introduction to using Python on the web—learn the basics of web apps, handling data, and building your first interactive projects step by step.",
      resources: "https://github.com/doubleudoublej/python-course",
      image: "https://www.xbasic.org/wp-content/uploads/2022/07/Python.jpg",
      tags: ["Python", "Web", "Algorithms", "Beginner"]
    }
  ];

  // Auto-categorize workshops (skip Lesson Series)
  const categorizedWorkshops = workshopsData.map(workshop => {
    if (workshop.category === "Lesson Series") return workshop;

    const workshopDate = new Date(workshop.date);
    const isValidDate = !isNaN(workshopDate.getTime());

    if (!isValidDate) return workshop;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const autoCategory = workshopDate < today ? "Past Workshops" : "Current Workshops";

    return {
      ...workshop,
      category: autoCategory
    };
  });

  // Sort workshops: Lesson Series -> Current Workshops -> Past Workshops
  const sortOrder = ["Lesson Series", "Current Workshops", "Past Workshops"];
  const sortedWorkshops = [...categorizedWorkshops].sort(
    (a, b) => sortOrder.indexOf(a.category) - sortOrder.indexOf(b.category)
  );

  const categories = ['All', ...new Set(categorizedWorkshops.map(w => w.category))];

  const filteredWorkshops = sortedWorkshops.filter(workshop => {
    const matchesSearch =
      workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || workshop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // show as-is if not a valid date
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="workshops-container">
      {/* Hero Section */}
      <section className="workshops-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Workshops</h1>
          <p className="hero-subtitle">
            Explore our comprehensive collection of workshops designed to enhance your technical skills
            and knowledge. From beginner-friendly sessions to advanced deep dives.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="workshops-controls">
        <div className="search-bar">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search workshops by title, topic, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-section">
          <Filter size={18} />
          <span className="filter-label">Filter by:</span>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="workshops-grid">
        {filteredWorkshops.length > 0 ? (
          filteredWorkshops.map(workshop => (
            <article key={workshop.id} className="workshop-card">
              <div className="workshop-image-container">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="workshop-image"
                />
                <div className="workshop-category-badge">{workshop.category}</div>
              </div>

              <div className="workshop-content">
                <h3 className="workshop-title">{workshop.title}</h3>

                <div className="workshop-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{formatDate(workshop.date)}</span>
                  </div>
                </div>

                <p className="workshop-description">{workshop.description}</p>

                <div className="workshop-tags">
                  {workshop.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="workshop-footer">
                  <span className="instructor-name">{workshop.instructor}</span>
                  {workshop.resources && workshop.resources !== "" && workshop.resources !== "#" ? (
                    <a
                      href={workshop.resources}
                      className="resources-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resources
                      <ChevronRight size={16} />
                    </a>
                  ) : (
                    <span className="no-resources"></span>
                  )}
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <p>No workshops found matching your criteria.</p>
            <button
              className="reset-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="workshops-stats">
        <div className="stat-card">
          <div className="stat-number">{categorizedWorkshops.length}</div>
          <div className="stat-label">Total Workshops</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{categories.length - 1}</div>
          <div className="stat-label">Categories</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {categorizedWorkshops.filter(
              w => w.category === 'Current Workshops' || w.category === 'Lesson Series'
            ).length}
          </div>
          <div className="stat-label">Active Workshops</div>
        </div>
      </section>
    </div>
  );
}
