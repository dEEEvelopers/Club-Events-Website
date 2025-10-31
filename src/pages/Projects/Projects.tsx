import './Projects.css';
import { useState } from 'react';

// Import your images
import img from '../../assets/SSSocialConnEEEct.png';
import PythonImg from '../../assets/python.jpg';
import clubs from '../../assets/eeeclubs.jpg';
import {Search} from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    name: 'SSSocialConnEEEct',
    image: img,
    description:
      'Valentine match-making between school of social sciences(SSS) and school of electrical and electronic engineering(EEE)',
    liveLink: 'https://www.sssocialconneeect.com/',
    codeLink: 'https://github.com/doubleudoublej/SSSocialConnEEEct',
    year: 2025,
  },
  {
    id: 2,
    name: 'School Calendar',
    image: clubs,
    description: 'An application to help students access information about all EEE clubs',
    codeLink: 'https://github.com/doubleudoublej/school-calendar',
    liveLink: null,
    year: 2025,
  },
  {
    id: 3,
    name: 'Python series',
    image: PythonImg,
    description:
      'Series of beginner friendly python workshops to build interactive web applications from scratch',
    codeLink: 'https://github.com/doubleudoublej/python-course',
    liveLink: null,
    year: 2025,
  },
];

export default function Project() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const uniqueYears = [...new Set(PROJECTS_DATA.map((project) => project.year))].sort((a, b) => b - a);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesSearchTerm =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = selectedFilter === 'All' || project.year.toString() === selectedFilter;

    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div className="projects-container min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Projects</h2>
        <p className="text-center text-yellow-500 mb-8"> where creativity meets technology</p>
      </div>

      {/*Search Bar */}
    <section className="projects-controls">
        <div className="search-bar">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search workshops by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </section>
      {/* Filter Section */}
      <div className="filter-section mb-8 flex flex-wrap gap-4 items-center justify-center">
        <span className="text-white font-medium">Filter by:</span>

        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedFilter === 'All'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
          onClick={() => setSelectedFilter('All')}
        >
          All Projects
        </button>

        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:border-blue-500"
        >
          <option value="All">All Years</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
          <option value="2026">2026</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
          >
            <div className="image-container relative overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop';
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className={`flex gap-2 ${project.liveLink ? '' : 'justify-center'}`}>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full bg-blue-600 border border-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 hover:border-blue-700 transition-colors duration-200 text-sm">
                      <span>Live Demo</span>
                    </button>
                  </a>
                )}

                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={project.liveLink ? 'flex-1' : 'w-full'}
                  >
                    <button
                      className={`w-full py-2 px-4 rounded-md transition-colors duration-200 text-sm ${
                        project.liveLink
                          ? 'bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                          : 'bg-green-600 border border-green-600 text-white hover:bg-green-700 hover:border-green-700'
                      }`}
                    >
                      <span>GitHub</span>
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="md:col-span-3 text-center py-8">
            <p className="text-xl text-gray-400">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}