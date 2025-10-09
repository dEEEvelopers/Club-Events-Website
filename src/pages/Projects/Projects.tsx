
import './Projects.css'; // Import the custom CSS file

// Import your image
import img from '../../assets/SSSocialConnEEEct.png';
import PythonImg from '../../assets/python.jpg';
import clubs from '../../assets/eeeclubs.jpg';
const Projects = [
  {
    id: 1,
    name: 'SSSocialConnEEEct',
    image: img,
    description: 'Valentine match-making between school of social sciences(SSS) and school of electrical and electronic engineering(EEE)',
    liveLink: 'https://www.sssocialconneeect.com/',
    codeLink: 'https://github.com/doubleudoublej/SSSocialConnEEEct'
  },
  {
    id: 2,
    name: 'School Calendar',
    image: clubs,
    description: 'An application to help students access information about all EEE clubs',
    codeLink:'https://github.com/doubleudoublej/school-calendar',
    liveLink: null
  },
  {
    id: 3,
    name: 'Python for the web',
    image: PythonImg,
    description: 'Series of beginner friendly python workshops to build interactive web applications from scratch',
    codeLink:'https://github.com/doubleudoublej/python-course',
    liveLink: null
  },
];
export default function Project() {
  return (
    <div className="projects-container min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
        <p className="text-center"> where creativity meets technology</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Projects.map((project) => (
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
                    e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Conditional buttons - show both if liveLink exists, otherwise only GitHub */}
                <div className={`flex gap-2 ${project.liveLink ? '' : 'justify-center'}`}>
                  {/* Live Demo Button - only show if liveLink exists */}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full bg-blue-600 border border-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 hover:border-blue-700 transition-colors duration-200 text-sm">
                        <span>Live Demo</span>
                      </button>
                    </a>
                  )}
                  
                  {/* GitHub Button - always show if codeLink exists */}
                  {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" 
                       className={project.liveLink ? 'flex-1' : 'w-full'}>
                      <button className={`w-full py-2 px-4 rounded-md transition-colors duration-200 text-sm ${
                        project.liveLink 
                          ? 'bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                          : 'bg-green-600 border border-green-600 text-white hover:bg-green-700 hover:border-green-700'
                      }`}>
                        <span>GitHub</span>
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}