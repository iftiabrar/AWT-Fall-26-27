function getStudentResult() {
  return new Promise((resolve, reject) => {
    console.log("Requesting student result...");

    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({
          id: 101,
          name: "Rahim",
          department: "CSE",
          marks: 85
        });
      }
      else {
      reject({
        
      });
      }
    }, 3
    );
    
  });
}

async function displayStudent() {
  console.log("Getting student data....");
  try {
    const student = await getStudentResult();
    console.log("Student data recieved");
    console.log("ID:", student.id);
    console.log("Name: ", student.name);
    console.log("Department: ", student.department);
    console.log("CGPA: ", student.cgpa);
  }

  catch (error) {
    console.log(error);
  }
}
displayStudent();
