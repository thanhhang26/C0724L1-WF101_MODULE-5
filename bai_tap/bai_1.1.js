let courses = [ 
  { 
    id: 1, 
    title: "ReactJS Tutorial", 
    rating: 4.2, 
  }, 
  { 
    id: 2, 
    title: "Angular Tutorial", 
    rating: 2.5, 
  }, 
  { 
    id: 3, 
    title: "VueJS Tutorial", 
    rating: 3.8, 
  }, 
  { 
    id: 4, 
    title: "Java Tutorial", 
    rating: 4, 
  }, 
  { 
    id: 5, 
    title: "JavaScript Tutorial", 
    rating: 3.5, 
  }, 
];

// yeu cau 1: Lọc các bài đăng có rating >= 4
const highCourses = courses.filter(course => course.rating >= 4);

// Xuất ra danh sách các bài đăng thỏa mãn điều kiện
highCourses.forEach(course => console.log(course.title));

// yeu cau 2: Lọc các bài đăng có rating < 4
const highCourses2 = courses.filter(course => course.rating < 4);
highCourses2.forEach(course => `${course.id} - ${course.title} - ${course.rating}`);
console.log(highCourses2);

// yeu cau 3: Sử dụng cú pháp ES6 đã học viết hàm trả về một mảng mới gộp 2 mảng courses và addedCourses
let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ];
  const highCourses3 = [...courses,...addedCourses];
  console.log(highCourses3);
	

