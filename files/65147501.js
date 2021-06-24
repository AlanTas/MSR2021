import React, { useState, useEffect  } from 'react';
import { Table } from 'react-materialize';
import axios from 'axios';

const CoursesTable = () => {

  const [courses, setCourses] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await axios.get('http://localhost:8001/')
      setCourses(coursesData.data)
      setLoading(false);
    }
    fetchData()
  }, [])
  if(isLoading) { return <div> Loading ... </div> };
  return (
    <Table>
      <thead>
        <tr>
          <th data-field="course-name">
            Name
          </th>
          <th data-field="course-prof">
            Prof.
          </th>
          <th data-field="course-code">
            Code
          </th>
        </tr>
      </thead>
      <tbody>
        {
          courses.length >= 1
          ? courses.map(course => 
              <tr key={course._id}>
                <td>
                  {course.name}
                </td>
                <td>
                  {course.prof}
                </td>
                <td>
                  {course.code}
                </td>
              </tr>
            )
          : <tr>
              <td>There is no course</td>
            </tr>
        }
      </tbody>
    </Table>
  );
}

export default CoursesTable;
