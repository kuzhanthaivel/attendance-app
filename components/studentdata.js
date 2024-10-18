const studentdata = [
    { id: '1', rollNumber: '110821104044', name: 'John Doe', year: 1, section: 'A' },
  ];
  
  const addStudent = (newStudent) => {
    newStudent.id = (studentdata.length + 1).toString(); // Automatically assign a new id
    studentdata.push(newStudent);
  };


  
  export { studentdata, addStudent };
 