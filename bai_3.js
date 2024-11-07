
const sv1={
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};
getInfo(sv1);

const sv2={
    name: 'John',
    gender: 'male',
    english: 'English'
};
getInfo(sv2);

//sử dụng Destructuring để lấy hai thuộc tính firstName và degree từ đối tượng được truyền vào. Nếu các thuộc tính này không có, chúng sẽ có giá trị mặc định là "Quân" và "NA".
function getInfo({ firstName = "Quân", degree = "NA" }) {
    console.log(`First Name: ${firstName}`);
    console.log(`Degree: ${degree}`);
}