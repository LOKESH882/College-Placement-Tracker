# College Placement Tracker

A web-based application to track and manage college placement activities, including students, colleges, companies, and job roles.

## Features

- **Student Management**: Add, view, edit, and delete student records
- **College Management**: Manage college information and details
- **Company Management**: Track recruiting companies and their details
- **Job Role Management**: Maintain job positions and requirements
- **Placement Tracking**: Monitor placement status (placed/not placed)
- **Search Functionality**: Search across all entities
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
CollegePlacementTracker/
├── HTML/
│   ├── index.html          # Main dashboard
│   ├── Students.html       # Student listing page
│   ├── Colleges.html       # College listing page
│   ├── Companies.html      # Company listing page
│   ├── JobRoles.html       # Job roles listing page
│   ├── addStudent.html     # Add new student form
│   ├── addCollege.html     # Add new college form
│   ├── addCompany.html     # Add new company form
│   └── addJobRole.html     # Add new job role form
├── CSS/
│   ├── index.css           # Dashboard styles
│   ├── header.css          # Header navigation styles
│   ├── forms.css           # Form styles
│   └── students.css        # Student page styles
└── JS/
    ├── api.js              # API endpoints and fetch functions
    ├── index.js            # Dashboard functionality
    ├── Students.js         # Student page logic
    ├── Colleges.js         # College page logic
    ├── Companies.js        # Company page logic
    ├── JobRoles.js         # Job roles page logic
    ├── addStudent.js       # Add student form logic
    ├── addCollege.js       # Add college form logic
    ├── addCompany.js       # Add company form logic
    └── addJobRole.js       # Add job role form logic
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend API**: RESTful API hosted on Render
- **Styling**: Custom CSS with responsive design
- **Data**: JSON-based API responses

## API Endpoints

The application connects to a backend API hosted at: `https://placementstracker-4.onrender.com/api`

Available endpoints:
- `/students` - Student data management
- `/colleges` - College information
- `/companies` - Company details
- `/job-roles` - Job role listings
- `/placements` - Placement records

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API access)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LOKESH882/CollegePlacementTracker.git
```

2. Navigate to the project directory:
```bash
cd CollegePlacementTracker
```

3. Open `HTML/index.html` in your web browser or serve it using a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

4. Access the application at `http://localhost:8000/HTML/index.html`

## Usage

### Dashboard
- View summary cards for students, colleges, companies, and job roles
- Navigate to different sections using the header navigation

### Student Management
- View all students with their placement status
- Filter students by placement status (All, Placed, Not Placed)
- Add new students with their details
- Edit or delete existing student records

### College Management
- Manage college information and details
- Add new colleges to the system

### Company Management
- Track recruiting companies
- Add company details and information

### Job Role Management
- Maintain available job positions
- Add new job roles with requirements

## Features in Detail

- **Responsive Design**: Adapts to different screen sizes
- **Search Functionality**: Search across all data types
- **CRUD Operations**: Create, Read, Update, Delete for all entities
- **Status Tracking**: Monitor placement status of students
- **Clean UI**: Modern and intuitive user interface

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [lokeshjagtap30@gmail.com]

## Acknowledgments

- Thanks to all contributors who helped build this project
- Special thanks to the placement cell for requirements and feedback"# College-Placement-Tracker" 
