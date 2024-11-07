const person = { 
    firstName: 'John',
    lastName: 'Doe', age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'], languages: ['English', 'Spanish'],
    education: {
    degree: 'Bachelor',
    major: 'Computer Science',
    university: 'Harvard University'
    }
    };
    // Sử dụng Destructuring để lấy các thuộc tính cần thiết
const { 
    firstName, 
    gender, 
    languages, 
    education: { degree } 
} = person;

// Tạo đối tượng student với các thuộc tính đã lấy
const student = { 
    firstName, 
    gender, 
    degree, 
    languages: [languages[0]] // Chỉ lấy phần tử đầu tiên của languages
};

// Hiển thị thông tin của student
console.log("Thông tin student vừa tạo:");
console.log(student);